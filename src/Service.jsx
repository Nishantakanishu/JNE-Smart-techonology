import React from "react";
import { motion } from "framer-motion";

// Image imports
import HeadEnd from "./assets/HeadEnd.png";
import MeterData from "./assets/MeterData.png";
import ConsumerAppWeb from "./assets/ConsumerAppWeb.png";

const services = [
  {
    title: "Head End System",
    description:
      "A centralized Head End System enabling seamless communication, control, and management of smart meter infrastructure in real time.",
    image: HeadEnd,
  },
  {
    title: "Meter Data Management",
    description:
      "Reliable meter data collection and processing platform ensuring accuracy, analytics, and actionable insights for utilities.",
    image: MeterData,
  },
  {
    title: "Consumer App & Web",
    description:
      "User-friendly mobile and web applications that empower consumers with real-time usage data, billing transparency, and control.",
    image: ConsumerAppWeb,
  },
];

const Service = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050b1e] via-[#06142e] to-[#020617] text-white pt-8 pb-28 px-6">
      
      {/* Header (pushed up) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-32"
      >
        <h3 className="text-xl md:text-3xl font-bold mb-8">
          Our <span className="text-cyan-400">Services</span>
        </h3>
        {/* <p className="text-gray-400 max-w-3xl mx-auto bg-black">
          Delivering intelligent digital solutions across the complete smart
          metering ecosystem with innovation, reliability, and scale.
        </p> */}
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-[#050b1e]/80 border border-cyan-400/20
                       rounded-2xl overflow-hidden
                       shadow-[0_0_40px_rgba(0,255,255,0.08)]
                       hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]
                       transition-shadow duration-300"
          >
            {/* Image Section (top half) */}
            <div className="relative h-52 bg-black overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050b1e]/90 to-transparent"></div> */}
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
