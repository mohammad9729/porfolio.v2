import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Mail size={16} /> Contact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Let's Build Something Great Together
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel border border-gray-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-sm text-gray-400">Feel free to reach out via email, phone call, or the submission form.</p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:mdk972913@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-2xl group-hover:border-cyan-500/30 transition-all">
                    <Mail className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                    <p className="font-semibold text-base">mdk972913@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+917387006733"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-2xl group-hover:border-indigo-500/30 transition-all">
                    <Phone className="text-indigo-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Me</p>
                    <p className="font-semibold text-base">+91 73870 06733</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-2xl">
                    <MapPin className="text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-base">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-800 text-xs text-gray-500">
              Response time: Typically within 24 hours
            </div>
          </motion.div>

          {/* Form Card - Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel border border-gray-800 rounded-3xl p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Mohammad, I'd love to talk about a project opportunity..."
                  className="w-full px-4 py-3 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Notification */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-semibold"
                    >
                      <CheckCircle2 size={18} />
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-2 text-rose-400 text-sm font-semibold"
                    >
                      <AlertCircle size={18} />
                      Please fill out all fields.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
