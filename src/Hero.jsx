import React from "react";
import jneLogo from "./assets/JNE_Logo.png";
import smartMeter from "./assets/smartMeter.png";
import mobileApp from "./assets/mobile-app.png";
import webDashboard from "./assets/web-dashboard.png";
import iotDevice from "./assets/iot-device.png";
import energyAnalytics from "./assets/energy-analytics.png";
import CircularStats from "./CircularStats";


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050b1e] overflow-hidden mt-0">

      {/* Circuit background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00eaff33,transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0066ff33,transparent_40%)]"></div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-cyan-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wide">
              JNE<br />
              <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]">
                SMART TECHNOLOGIES
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
              Powering the future of connected technology through intelligent
              electrical systems, smart meters, and next-generation IoT
              platforms.
            </p>

            <div className="mt-10 flex gap-6">
              <button className="px-10 py-4 rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-10 py-4 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition">
                Learn More
              </button>
            </div>

            {/* Circular Stats */}
            <CircularStats />

            <div className="mt-14 text-sm tracking-widest text-gray-400 uppercase">
              Smart Meters • IoT • Energy Analytics • Web & Mobile Apps
            </div>
          </div>

          {/* RIGHT VISUAL */}
          {/* <div className="relative flex justify-center"> */}

            {/* Floating panels */}
            {/* <div className="absolute -top-10 left-10 w-56 h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"></div> */}

            {/* Energy Globe */}
            {/* <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center">

              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 blur-2xl"></div> */}

              {/* Smart Meter Core */}
              {/* <div className="relative w-44 h-44 bg-[#020617] rounded-2xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.4)] flex flex-col items-center justify-center">
                <span className="text-cyan-300 font-semibold tracking-wide">
                  Smart Meter
                </span>
                <span className="text-xs text-gray-400 mt-2">
                  Real-time Energy
                </span>
              </div>
            </div>

          </div> */}


          {/* RIGHT VISUAL – SMART ECOSYSTEM */}
<div className="relative flex justify-center items-center h-[520px]">

  {/* Rotating energy ring */}
  <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/30 animate-[slow-spin_40s_linear_infinite]"></div>
  <div className="absolute w-[410px] h-[410px] rounded-full border border-cyan-400/30 animate-[slow-spin_40s_linear_infinite]"></div>
  <div className="absolute w-[400px] h-[400px] rounded-full border border-cyan-400/30 animate-[slow-spin_40s_linear_infinite]"></div>

  {/* Center – Smart Meter */}
  <div className="relative z-10 w-44 h-44 bg-[#020617] rounded-2xl border border-cyan-400/50 
                shadow-[0_0_40px_rgba(0,255,255,0.4)] 
                flex flex-col items-center justify-center">
  <img
    src={smartMeter}
    alt="Smart Meter"
    className="w-28 object-contain"
  />
  <p className="text-xs text-cyan-300 text-center mt-2">
    Smart Meter
  </p>
</div>


  {/* Mobile App */}
  <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
    <div className="w-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
      <img src={mobileApp} alt="Mobile App" />
      <p className="text-xs text-cyan-300 text-center mt-2">
        Android/iOS
      </p>
    </div>
  </div>

  {/* Web Dashboard */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-[float_7s_ease-in-out_infinite]">
    <div className="w-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 mb-3">
      <img src={webDashboard} alt="Web Dashboard" />
      <p className="text-xs text-cyan-300 text-center mt-2">
        Web Platform
      </p>
    </div>
  </div>

  {/* IoT Device */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-[float_5s_ease-in-out_infinite]">
    <div className="w-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
      <img src={iotDevice} alt="IoT Device" />
      <p className="text-xs text-cyan-300 text-center mt-2">
        IoT Devices
      </p>
    </div>
  </div>

  {/* Analytics Node */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-[float_6.5s_ease-in-out_infinite]">
    <div className="w-44 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
      <img src={energyAnalytics} alt="Energy Analytics" />
      <p className="text-xs text-cyan-300 text-center mt-2">
        Energy Analytics
      </p>
    </div>
  </div>

</div>



          
        </div>
      </div>
    </section>
  );
};

export default Hero;
