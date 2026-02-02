/*
 * DESIGN: Neo-Brutalist Red & Tan - AnimatedBackground Component
 * - Subtle dotted or striped pattern
 * - Warm tan/cream base
 * - Minimal animation - brutalism is raw and static
 */

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base tan background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "var(--brutal-tan)",
        }}
      />

      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 brutal-dots opacity-50"
      />

      {/* Diagonal stripes in corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-64 h-64"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            var(--brutal-red) 8px,
            var(--brutal-red) 10px
          )`,
          opacity: 0.1,
        }}
      />

      {/* Bottom left accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-48 h-48"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            var(--brutal-black) 8px,
            var(--brutal-black) 10px
          )`,
          opacity: 0.05,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8"
        style={{
          background: "var(--brutal-red)",
          border: "2px solid var(--brutal-black)",
        }}
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          y: [0, -10, 0, 10, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6"
        style={{
          background: "var(--brutal-brown)",
          border: "2px solid var(--brutal-black)",
          borderRadius: "50%",
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-8 w-4 h-12"
        style={{
          background: "var(--brutal-black)",
        }}
        animate={{ 
          scaleY: [1, 1.5, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--brutal-black) 1px, transparent 1px),
            linear-gradient(90deg, var(--brutal-black) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
