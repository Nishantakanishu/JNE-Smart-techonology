// import React from "react";
// import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

// const AboutUs = () => {
//   const features = [
//     {
//       icon: <FaLightbulb className="text-4xl text-cyan-400" />,
//       title: "Innovation First",
//       description: "Pioneering smart technologies that redefine energy management."
//     },
//     {
//       icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
//       title: "Reliable Security",
//       description: "Enterprise-grade security for your IoT and data infrastructure."
//     },
//     {
//       icon: <FaUsers className="text-4xl text-cyan-400" />,
//       title: "Customer Centric",
//       description: "Dedicated support and tailored solutions for every client."
//     },
//     {
//       icon: <FaCheckCircle className="text-4xl text-cyan-400" />,
//       title: "Proven Excellence",
//       description: "Delivering high-quality projects with consistent results."
//     }
//   ];

//   return (
//     <section className="relative py-24 bg-[#050b1e] overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About JNE</h2>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Building the Future of <br className="hidden md:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               Smart Technology
//             </span>
//           </h1>
//           <p className="text-lg text-gray-400 leading-relaxed">
//             At JNE, we are driven by a singular mission: to empower businesses and communities with intelligent energy solutions. 
//             From smart metering to advanced IoT analytics, we provide the infrastructure for a connected world.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => (
//             <div 
//               key={index} 
//               className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 hover:bg-white/10 transition-all duration-300"
//             >
//               <div className="mb-6 bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React from 'react'

const AboutUs = () => {
  return (
    <div>AboutUs</div>
  )
}

export default AboutUs