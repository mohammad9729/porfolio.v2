import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "system_init: OK",
    "mounting: tailwind_v4",
    "establishing: db_connection_mysql",
    "hydrating: react_dom_tree",
    "status: system_ready"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#020617] z-[9999] flex flex-col items-center justify-center font-mono select-none overflow-hidden"
        >
          {/* Cyber grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

          {/* Central Cyber HUD */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Holographic rings */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20"
              />
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-indigo-500/30"
              />
              {/* Inner glow spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border-t-2 border-cyan-400 border-r border-transparent"
              />
              
              {/* Central digital value */}
              <div className="text-3xl font-black text-cyan-400 tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                {progress}%
              </div>
            </div>

            {/* Console Log Monitor */}
            <div className="w-80 h-32 bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 flex flex-col gap-1.5 overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-slate-800 pb-1.5 mb-1.5 font-bold tracking-widest uppercase">
                <span>Core Compiler HUD</span>
                <span className="animate-pulse text-cyan-400">ONLINE</span>
              </div>
              
              <div className="flex-1 space-y-1 text-xs text-indigo-300">
                {logs.slice(0, logIndex + 1).map((log, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-cyan-500">&gt;</span>
                    <span className={index === logIndex ? "text-cyan-400 font-bold" : "text-gray-500"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
