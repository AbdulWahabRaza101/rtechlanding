import React, { useRef, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  PanInfo,
  MotionValue,
} from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";

type MarqueeItemProps = {
  children: React.ReactNode;
  speed: MotionValue<any>;
};

const MarqueeItem: React.FC<MarqueeItemProps> = ({ children, speed }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const x = useRef(0);
  const [width, height] = useWindowSize();

  const setX = () => {
    if (!itemRef.current || !rectRef.current) return;

    const xPercentage = (x.current / rectRef.current.width) * 100;

    if (xPercentage < -100) x.current = 0; // Reset when fully off-screen

    itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    if (itemRef.current) {
      rectRef.current = itemRef.current.getBoundingClientRect();
    }
  }, [width, height]);

  const loop = () => {
    // Move marquee items at the defined speed
    x.current -= speed.get();
    setX();
  };

  const [_, loopStart] = useRafLoop(loop, false);

  useEffect(() => {
    loopStart();
  }, []);

  return (
    <motion.div className="flex" ref={itemRef}>
      {children}
    </motion.div>
  );
};

type MarqueeProps = {
  speed?: number;
  threshold?: number;
  wheelFactor?: number;
  dragFactor?: number;
  children: React.ReactNode;
};

export const InteractiveMarquee: React.FC<MarqueeProps> = ({
  speed = 0.8, // Increased speed
  threshold = 0.01,
  wheelFactor = 2,
  dragFactor = 1.5,
  children,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const slowDown = useRef(false);
  const isScrolling = useRef<NodeJS.Timeout | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const x = useRef(0);
  const [wWidth] = useWindowSize();

  const speedSpring = useSpring(speed, {
    damping: 30,
    stiffness: 120,
    mass: 2,
  });

  const opacity = useTransform(
    speedSpring,
    [-wWidth * 0.05, 0, wWidth * 0.05],
    [1, 0, 1]
  );
  const skewX = useTransform(
    speedSpring,
    [-wWidth * 0.05, 0, wWidth * 0.05],
    [1, 0, 1]
  );

  const handleOnWheel = (e: React.WheelEvent<HTMLDivElement> | undefined) => {
    const normalized = normalizeWheel(e);
    x.current = normalized.pixelY * wheelFactor;

    if (isScrolling.current) {
      window.clearTimeout(isScrolling.current);
    }

    isScrolling.current = setTimeout(() => {
      speedSpring.set(speed);
    }, 30);
  };

  const handleDragStart = () => {
    slowDown.current = true;
    speedSpring.set(0);
  };

  const handleOnDrag = (_: any, info: PanInfo) => {
    speedSpring.set(dragFactor * -info.delta.x);
  };

  const handleDragEnd = () => {
    slowDown.current = false;
    x.current = speed;
  };

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < threshold) {
      return;
    }
    x.current *= 0.66;
    x.current = Math.max(Math.min(x.current, 0), 0);
    speedSpring.set(speed + x.current);
  };

  useRafLoop(loop);

  return (
    <>
      <motion.div
        className="opacity-75"
        style={{ opacity }}
        ref={constraintsRef}
      />
      <motion.div
        className="flex items-center space-x-8" // Tailwind to align horizontally and add spacing
        ref={marqueeRef}
        style={{ skewX }}
        onWheel={handleOnWheel}
        drag="x"
        dragPropagation={true}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.000001}
      >
        {/* Two MarqueeItems for continuous scrolling */}
        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
        {/* <MarqueeItem speed={speedSpring}>{children}</MarqueeItem> */}
      </motion.div>
    </>
  );
};
