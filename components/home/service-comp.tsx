"use client";

import {
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

import { cn } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 509;
const CURSOR_SIZE = 80;

const articles = [
  {
    img: "/assets/home/service/web-item.svg",
    title: "Web Development",
    desc: "Transform your ideas into reality with our cutting-edge software and app development, tailored to meet your unique needs.",
    url: "/",
  },
  {
    img: "/assets/home/service/ui-ux-item.svg",
    title: "UIUX DESIGNING",
    desc: "Designs that connect – we craft user interfaces that are not just beautiful but also easy to use and navigate.",
    url: "/",
  },
  {
    img: "/assets/home/service/mobile-app-item.svg",
    title: "Mobile App Development",
    desc: "Turn your vision into a top-rated app with our end-to-end mobile development services.",
    url: "/",
  },
  {
    img: "/assets/home/service/graphic-item.svg",
    title: "Graphic Designing",
    desc: "From logos to brochures, our graphic design services turn ideas into impactful visuals.",
    url: "/",
  },
  {
    img: "/assets/home/service/marketing-item.svg",
    title: "Marketing",
    desc: "Drive engagement and conversions with our innovative digital marketing solutions tailored to your business needs.",
    url: "/",
  },
];

export function ServiceComp() {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);
  //   function handleDragSnap(
  //     _: MouseEvent,
  //     { offset: { x: dragOffset } }: PanInfo
  //   ) {
  //     //reset drag state
  //     setIsDragging(false);
  //     containerRef.current?.removeAttribute("data-dragging");

  //     //stop drag animation (rest velocity)
  //     animatedX.stop();

  //     const currentOffset = offsetX.get();

  //     //snap back if not dragged far enough or if at the start/end of the list
  //     if (
  //       Math.abs(dragOffset) < DRAG_THRESHOLD ||
  //       (!canScrollPrev && dragOffset > 0) ||
  //       (!canScrollNext && dragOffset < 0)
  //     ) {
  //       animatedX.set(currentOffset);
  //       return;
  //     }

  //     let offsetWidth = 0;
  //     /*
  //       - start searching from currently active slide in the direction of the drag
  //       - check if the drag offset is greater than the width of the current item
  //       - if it is, add/subtract the width of the next/prev item to the offsetWidth
  //       - if it isn't, snap to the next/prev item
  //     */
  //     for (
  //       let i = activeSlide;
  //       dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
  //       dragOffset > 0 ? i-- : i++
  //     ) {
  //       const item = itemsRef.current[i];
  //       if (item === null) continue;
  //       const itemOffset = item.offsetWidth;

  //       const prevItemWidth =
  //         itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
  //       const nextItemWidth =
  //         itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

  //       if (
  //         (dragOffset > 0 && //dragging left
  //           dragOffset > offsetWidth + itemOffset && //dragged past item
  //           i > 1) || //not the first/second item
  //         (dragOffset < 0 && //dragging right
  //           dragOffset < offsetWidth + -itemOffset && //dragged past item
  //           i < itemsRef.current.length - 2) //not the last/second to last item
  //       ) {
  //         dragOffset > 0
  //           ? (offsetWidth += prevItemWidth)
  //           : (offsetWidth -= nextItemWidth);
  //         continue;
  //       }

  //       if (dragOffset > 0) {
  //         //prev
  //         offsetX.set(currentOffset + offsetWidth + prevItemWidth);
  //         setActiveSlide(i - 1);
  //       } else {
  //         //next
  //         offsetX.set(currentOffset + offsetWidth - nextItemWidth);
  //         setActiveSlide(i + 1);
  //       }
  //       break;
  //     }
  //   }
  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    // Reset drag state
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");

    // Stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    // Snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;

    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;

      const itemWidth = item?.getBoundingClientRect().width ?? FALLBACK_WIDTH;

      const prevItemWidth =
        itemsRef.current[i - 1]?.getBoundingClientRect().width ??
        FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.getBoundingClientRect().width ??
        FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && dragOffset > offsetWidth + itemWidth && i > 0) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth - itemWidth &&
          i < itemsRef.current.length - 1)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        // Scroll to previous item
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        // Scroll to next item
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }
  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  const [hoverType, setHoverType] = useState<"prev" | "next" | "click" | null>(
    null
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animatedHoverX = useSpring(mouseX, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });
  const animatedHoverY = useSpring(mouseY, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });

  function navButtonHover({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    const parent = currentTarget.offsetParent;
    if (!parent) return;
    const { left: parentLeft, top: parentTop } = parent.getBoundingClientRect();

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetFromCenterX = clientX - centerX;
    const offsetFromCenterY = clientY - centerY;

    mouseX.set(left - parentLeft + offsetFromCenterX / 4);
    mouseY.set(top - parentTop + offsetFromCenterY / 4);
  }

  function disableDragClick(e: ReactMouseEvent<HTMLAnchorElement>) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial value
    if (windowWidth < 800) {
      setActiveSlide(0);
    }

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth < 800) {
      setActiveSlide(0);
    }
  }, []);
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-20 py-4 bg-[url('/assets/home/service/bg.svg')] bg-cover bg-no-repeat min-h-[90vh]">
        <div className="flex flex-col items-center text-center justify-center text-white max-md:max-w-[300px]">
          <h1 className="text-h1 max-md:text-h3 font-[500]">
            Services we offer for you
          </h1>
          <p className="max-md:text-[12px]">
            accelerate your business success with our innovative digital
            solutions
          </p>
        </div>
        <div className="group container mx-6 max-md:w-full">
          <motion.div
            className={cn(
              "pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            )}
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
              x: animatedHoverX,
              y: animatedHoverY,
            }}
          >
            <motion.div
              layout
              className={cn(
                "grid h-full place-items-center rounded-full bg-[#0F599A]",
                hoverType === "click" && "absolute inset-7 h-auto"
              )}
            >
              <motion.span
                layout="position"
                className={cn(
                  "w-full select-none text-center font-medium uppercase text-white",
                  (hoverType === "prev" || hoverType === "next") &&
                    "absolute inset-x-0 top-2",
                  hoverType === "click" &&
                    "absolute top-full mt-0.5 w-auto text-sm font-bold text-white"
                )}
              >
                {hoverType ?? "drag"}
              </motion.span>
            </motion.div>
          </motion.div>
          <div className="relative w-full overflow-hidden">
            <motion.ul
              ref={containerRef}
              className="flex cursor-none items-start"
              style={{
                x: animatedX,
              }}
              drag="x"
              dragConstraints={{
                left: -(FALLBACK_WIDTH * (articles.length - 1)),
                right: FALLBACK_WIDTH,
              }}
              onMouseMove={({ currentTarget, clientX, clientY }) => {
                const parent = currentTarget.offsetParent;
                if (!parent) return;
                const { left, top } = parent.getBoundingClientRect();
                mouseX.set(clientX - left - CURSOR_SIZE / 2);
                mouseY.set(clientY - top - CURSOR_SIZE / 2);
              }}
              onDragStart={() => {
                containerRef.current?.setAttribute("data-dragging", "true");
                setIsDragging(true);
              }}
              onDragEnd={handleDragSnap}
            >
              {articles?.map((article, index) => {
                const active = index === activeSlide;
                return (
                  <motion.li
                    layout
                    key={article.title}
                    ref={(el) => {
                      if (itemsRef.current) {
                        itemsRef.current[index] = el;
                      }
                    }}
                    className={cn(
                      "group relative shrink-0 select-none px-3 transition-opacity duration-300",
                      !active && "opacity-30"
                    )}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.4,
                    }}
                    style={{
                      flexBasis: active ? "40%" : "30%",
                    }}
                  >
                    <Link
                      href={article.url}
                      className="block"
                      target="_blank"
                      rel="noopener noreferrer"
                      draggable={false}
                      onClick={disableDragClick}
                    >
                      <div
                        className={cn(
                          "flex flex-col items-start gap-3 px-8 py-8 rounded-lg",
                          active ? "aspect-[5/3] text-white" : "aspect-[4/3]"
                        )}
                        style={{
                          backgroundImage: `url('${article.img}')`,
                        }}
                      >
                        <h1
                          className="text-h3 font-[500] cursor-none leading-tight transition-colors"
                          draggable={false}
                          onMouseEnter={() => setHoverType("click")}
                          onMouseLeave={() => setHoverType(null)}
                        >
                          {article.title}
                        </h1>
                        <p
                          className="cursor-none leading-tight transition-colors"
                          draggable={false}
                          onMouseEnter={() => setHoverType("click")}
                          onMouseLeave={() => setHoverType(null)}
                        >
                          {article.desc}
                        </p>
                        {active && (
                          <Button className="uppercase w-[150px] mt-3 bg-primary text-white">
                            GET Started
                          </Button>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
            {/* <button
              type="button"
              className="max-md:hidden group absolute left-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
              style={{
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
              }}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              onMouseEnter={() => setHoverType("prev")}
              onMouseMove={(e) => navButtonHover(e)}
              onMouseLeave={() => setHoverType(null)}
            >
              <span className="sr-only">Previous Guide</span>
              <MoveLeft className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-white group-disabled:opacity-50" />
            </button>
            <button
              type="button"
              className="max-md:hidden group absolute right-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
              style={{
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
              }}
              onClick={scrollNext}
              disabled={!canScrollNext}
              onMouseEnter={() => setHoverType("next")}
              onMouseMove={(e) => navButtonHover(e)}
              onMouseLeave={() => setHoverType(null)}
            >
              <span className="sr-only">Next Guide</span>
              <MoveRight className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-white group-disabled:opacity-50" />
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
