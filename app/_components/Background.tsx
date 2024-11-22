"use client";
import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const interactiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      if (interactiveRef.current) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-[32rem] w-screen overflow-hidden opacity-30 blur-xl">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-teal-300 to-neutral-900"></div>
      <div className="absolute left-0 top-0 h-full w-full">
        {/* <div className="bg-gradient-radial animate-moveVertical absolute h-[80%] w-[80%] rounded-full from-teal-400 to-transparent mix-blend-hard-light"></div> */}
        <div className="bg-gradient-radial animate-moveInCircle absolute h-[80%] w-[80%] rounded-full from-indigo-300 to-transparent mix-blend-hard-light"></div>
        <div className="bg-gradient-radial animate-moveInCircle from-emerald -500 absolute h-[80%] w-[80%]  rounded-full to-transparent mix-blend-hard-light"></div>
        <div className="bg-gradient-radial animate-moveHorizontal absolute h-[80%] w-[80%] rounded-full from-pink-600 to-transparent mix-blend-hard-light"></div>
        <div className="bg-gradient-radial animate-moveInCircle absolute h-[160%] w-[160%] rounded-full from-indigo-400 to-transparent mix-blend-hard-light"></div>
      </div>
      <div
        ref={interactiveRef}
        className="bg-gradient-radial absolute -left-32 -top-32 h-64 w-64 rounded-full from-yellow-300 to-transparent opacity-70"
      ></div>
    </div>
  );
};

export default InteractiveBackground;
