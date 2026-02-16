/*
 * DESIGN: Neo-Brutalist Red & Tan - Footer Component
 * - Bold, raw branding
 * - Chunky styling
 */

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-12 pb-8 text-center"
    >
      <motion.div
        className="inline-block px-4 py-2"
        style={{
          background: "var(--brutal-cream)",
          border: "2px solid var(--brutal-black)",
          boxShadow: "3px 3px 0px var(--brutal-black)",
        }}
        whileHover={{ 
          x: 1.5,
          y: 1.5,
          boxShadow: "1.5px 1.5px 0px var(--brutal-black)",
        }}
        transition={{ duration: 0.15 }}
      >
        <p 
          className="font-display text-sm font-bold uppercase tracking-wide"
          style={{ color: "var(--brutal-black)" }}
        >
          Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block"
            style={{ color: "var(--brutal-red)" }}
          >
            ♥
          </motion.span>{" "}
          by{" "}
          <span style={{ color: "var(--brutal-red)" }}>
            bjtheartist
          </span>
        </p>
      </motion.div>
    </motion.footer>
  );
}
