import React from "react";

export function GetInTouchComp() {
  return (
    <div
      className="flex items-center justify-center relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/get-in-touch-bg.svg')` }}
    >
      <div className="absolute inset-0 flex items-center justify-center gap-96 px- py-4">
        {/* Left Side Content */}
        <div className="flex flex-col items-start text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Ready to launch your next project?
          </h1>
          <p className="text-lg">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        {/* Right Side Button */}
        <div className="flex items-center">
          <a
            href="#get-started"
            className="bg-white text-black py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started on a Project
          </a>
        </div>
      </div>
    </div>
  );
}
