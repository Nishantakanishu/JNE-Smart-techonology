// import React from "react";
// import { FaChartLine, FaCogs, FaNetworkWired, FaServer } from "react-icons/fa";

// const Solutions = () => {
//   const solutions = [
//     {
//       icon: <FaCogs className="text-3xl text-white" />,
//       title: "Smart Metering Infrastructure",
//       description: "End-to-end AMI solutions including installation, maintenance, and data management for utilities."
//     },
//     {
//       icon: <FaNetworkWired className="text-3xl text-white" />,
//       title: "IoT Connectivity",
//       description: "Seamless integration of devices using LoRaWAN, NB-IoT, and cellular technologies."
//     },
//     {
//       icon: <FaServer className="text-3xl text-white" />,
//       title: "Grid Automation",
//       description: "Advanced distribution management systems to optimize grid performance and reliability."
//     },
//     {
//       icon: <FaChartLine className="text-3xl text-white" />,
//       title: "Predictive Analytics",
//       description: "AI-driven insights to predict faults, usage spikes, and optimize energy distribution."
//     }
//   ];

//   return (
//     <section className="py-24 bg-[#0b1226] relative overflow-hidden">
//        {/* Decorative Lines */}
//        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Our Solutions</h2>
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               Intelligent Systems for <br />
//               <span className="text-blue-500">Modern Challenges</span>
//             </h1>
//           </div>
          
//           <button className="px-8 py-3 rounded-full border border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors">
//             View All Services
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {solutions.map((sol, index) => (
//              <div 
//                key={index}
//                className="bg-[#050b1e] p-8 rounded-2xl border border-white/5 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 group"
//              >
//                 <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors shadow-lg shadow-blue-900/50">
//                    {sol.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">{sol.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                   {sol.description}
//                 </p>
//                 <a href="#" className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
//                   Load More <span>&rarr;</span>
//                 </a>
//              </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;


import React from 'react'

const Solutions = () => {
  return (
    <div>Solutions</div>
  )
}

export default Solutions
