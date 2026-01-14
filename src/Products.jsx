// import React from "react";
// import smartMeter from "./assets/smartMeter.png";
// import mobileApp from "./assets/mobile-app.png";
// import webDashboard from "./assets/web-dashboard.png";
// import iotDevice from "./assets/iot-device.png";

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Smart Meter",
//       category: "Hardware",
//       image: smartMeter,
//       description: "Next-gen electrical metering with real-time data transmission and tampering alerts."
//     },
//     {
//       id: 2,
//       title: "IoT Gateway",
//       category: "Connectivity",
//       image: iotDevice,
//       description: "Robust gateway solutions ensuring seamless communication between devices and the cloud."
//     },
//     {
//       id: 3,
//       title: "Energy Analytics",
//       category: "Software",
//       image: webDashboard,
//       description: "Comprehensive dashboard for monitoring consumption patterns and optimizing efficiency."
//     },
//     {
//       id: 4,
//       title: "Consumer Mobile App",
//       category: "Application",
//       image: mobileApp,
//       description: "User-friendly mobile application for real-time tracking and bill payments."
//     }
//   ];

//   return (
//     <section className="relative py-24 bg-[#0b1226]">
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b1226_0%,#020617_100%)]"></div>
       
//        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
//         <div className="mb-16">
//           <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Our Products</h2>
//           <h1 className="text-4xl md:text-5xl font-bold text-white">
//             Cutting-Edge Solutions
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {products.map((product) => (
//             <div 
//               key={product.id}
//               className="group relative overflow-hidden rounded-3xl bg-[#111c3a] border border-white/5 hover:border-cyan-400/30 transition-all duration-500"
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              
//               <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[400px]">
//                  <div className="mb-auto flex justify-center py-10">
//                     <img 
//                       src={product.image} 
//                       alt={product.title} 
//                       className="h-48 object-contain group-hover:scale-110 transition-transform duration-500" 
//                     />
//                  </div>

//                  <span className="text-cyan-400 text-sm font-medium mb-2 block">{product.category}</span>
//                  <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
//                  <p className="text-gray-400 mb-6 max-w-md">{product.description}</p>
                 
//                  <button className="w-fit px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all">
//                     Learn More
//                  </button>
//               </div>
//             </div>
//           ))}
//         </div>
//        </div>
//     </section>
//   );
// };

// export default Products;




import React from 'react'

const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products