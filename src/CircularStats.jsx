import React, { useEffect, useState } from "react";

const CircularStat = ({ label, targetValue, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = targetValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] bg-[#050b1e]">
        {/* Rotating outer ring */}
        <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin opacity-70"></div>
        
        <div className="flex flex-col items-center z-10">
          <span className="text-xl md:text-2xl font-bold text-white">
            {count}{suffix}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base text-gray-400 font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
};

const CircularStats = () => {
  return (
    <div className="flex flex-wrap gap-8 md:gap-12 mt-12 justify-start">
      <CircularStat label="Client Retention" targetValue={98} suffix="%" />
      <CircularStat label="Projects Delivered" targetValue={150} suffix="+" />
      <CircularStat label="Value Created" targetValue={50} suffix="M+" />
    </div>
  );
};

export default CircularStats;
