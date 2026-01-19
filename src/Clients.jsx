import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaUsers,
  FaNetworkWired,
  FaBuilding,
  FaBolt,
  FaUserFriends,
} from "react-icons/fa";

/* =======================
   CLIENT LOGOS
   ======================= */
import sgilImg from "./assets/Satnam logo.jpg";
import dmsImg from "./assets/DMS.avif";
import renesasImg from "./assets/Renesas.png";
import networkEnergyImg from "./assets/nes.webp";
import modernTransformerImg from "./assets/Modern-transformers-logo.gif";
import techovaImg from "./assets/TechOva.png";
import mahashaktiImg from "./assets/Mahashakti energy logo.png";
import ITSquareImg from "./assets/IT square.png";
import EppeltoneIMG from "./assets/eppeltone-linear-logo.avif";
import UmaGroupIMG from "./assets/Uma group.webp";
import OakterIMG from "./assets/Oakter logo.png";
import VisarIMG from "./assets/Visar logo.webp";

/* =======================
   CLIENT DATA
   ======================= */
const clients = [
  { name: "SGIL", full: "Satnam Global Infraprojects Ltd.", image: sgilImg },
  { name: "DMS E Solutions", full: "Smart Meter & Energy Solutions", image: dmsImg },
  { name: "RENESAS", full: "Semiconductor & IoT Leader", image: renesasImg },
  { name: "Network Energy", full: "Power Infrastructure Services", image: networkEnergyImg },
  { name: "Modern Transformers", full: "Transformer Manufacturing", image: modernTransformerImg },
  { name: "TECHOVA", full: "Digital Energy Platforms", image: techovaImg },
  { name: "Mahashakti Energy", full: "Renewable Power Systems", image: mahashaktiImg },
  { name: "IT SQUARE", full: "Utility IT Solutions", image: ITSquareImg },
  { name: "UMA GROUP", full: "Electrical EPC Services", image: UmaGroupIMG },
  { name: "EPPELTONE", full: "Metering Technology Experts", image: EppeltoneIMG },
  { name: "OAKTER", full: "Smart Energy Devices", image: OakterIMG },
  { name: "VISAR", full: "Utility Sales & Distribution", image: VisarIMG },
];

const row1 = clients.slice(0, Math.ceil(clients.length / 2));
const row2 = clients.slice(Math.ceil(clients.length / 2));

/* =======================
   FIXED SIZE CARD
   ======================= */
const ClientCard = ({ client }) => {
  return (
    <div className="relative w-[260px] h-[220px] flex-shrink-0 group z-50">

      {/* Hover Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute right-[-190px] top-6 w-44 bg-[#0b122a] border border-cyan-400/30 rounded-xl p-3 text-xs text-gray-300 shadow-xl z-[60] pointer-events-none group-hover:pointer-events-auto"
      >
        <p className="text-cyan-400 font-semibold mb-1">About</p>
        <p>{client.full}</p>
      </motion.div>

      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 blur opacity-30 group-hover:opacity-50 transition-opacity" />

      <div className="relative w-full h-full rounded-2xl bg-[#050b1e]/95 backdrop-blur-xl border border-white/10 p-4 flex flex-col justify-between">

        {/* Logo */}
        <div className="h-20 flex items-center justify-center">
          <img
            src={client.image}
            alt={client.name}
            className="max-h-16 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-base font-semibold text-white">
            {client.name}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            {client.full}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-[10px] tracking-widest text-cyan-400 uppercase">
            Trusted
          </span>
          <FaHandshake className="text-cyan-400 text-sm" />
        </div>
      </div>
    </div>
  );
};

/* =======================
   MAIN COMPONENT
   ======================= */
const Clients = () => {
  return (
    <section className="relative py-24 bg-[#050b1e] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/25 blur-[200px] z-0" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-blue-600/25 blur-[200px] z-0" />

      {/* FLOATING ICONS (INNER LAYER) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[FaBuilding, FaBolt, FaUsers, FaUserFriends, FaNetworkWired].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{ left: `${10 + i * 18}%`, top: `${20 + i * 10}%` }}
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 14 + i * 2, repeat: Infinity }}
          >
            <Icon size={120} />
          </motion.div>
        ))}
      </div>

      {/* HEADING */}
      <div className="relative z-20 text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">
          Clients & Collaborations
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Powering the Energy Ecosystem
        </h1>
      </div>

      {/* FLOATING CARDS – TOP MOST LAYER */}
      <div className="relative z-50 w-screen overflow-hidden space-y-10">

        {/* Row 1 */}
        <motion.div
          className="flex gap-8 w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...row1, ...row1].map((c, i) => (
            <ClientCard key={`r1-${i}`} client={c} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex gap-8 w-max px-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...row2, ...row2].map((c, i) => (
            <ClientCard key={`r2-${i}`} client={c} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Clients;
