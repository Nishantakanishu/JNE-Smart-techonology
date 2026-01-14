import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-6">JNE</div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering the future with intelligent energy solutions and next-generation IoT infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">Smart Metering</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">IoT Solutions</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">System Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} JNE Smart Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


