import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-24 bg-[#050b1e] overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Get in Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Connect?
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           {/* Contact Info */}
           <div className="space-y-8">
              <p className="text-xl text-gray-300">
                Have a project in mind or want to learn more about our smart technologies? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-4 rounded-full text-cyan-400 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Head Office</h3>
                    <p className="text-gray-400">123 Tech Park, Innovation Blvd<br/>Silicon Valley, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-4 rounded-full text-cyan-400 text-xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-4 rounded-full text-cyan-400 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Email</h3>
                    <p className="text-gray-400">contact@jne-tech.com</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Form */}
           <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                    <input type="text" className="w-full bg-[#0b1226] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#0b1226] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Last Name" />
                  </div>
                </div>

                <div>
                   <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                   <input type="email" className="w-full bg-[#0b1226] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Email@example.com" />
                </div>

                <div>
                   <label className="block text-gray-400 text-sm mb-2">Message</label>
                   <textarea rows="4" className="w-full bg-[#0b1226] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




