/*
 * DESIGN: Neo-Brutalist Red & Tan - CategorySection Component
 * - Bold uppercase section headers
 * - Red accent elements
 * - Raw, chunky dividers
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CategorySectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  index: number;
}

export function CategorySection({ title, icon, children, index }: CategorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="mb-10"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        {icon && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="w-10 h-10 flex items-center justify-center"
            style={{
              background: "var(--brutal-red)",
              border: "2px solid var(--brutal-black)",
              boxShadow: "3px 3px 0px var(--brutal-black)",
            }}
          >
            <span style={{ color: "var(--brutal-cream)" }}>{icon}</span>
          </motion.div>
        )}
        
        <h2 
          className="font-display font-bold text-xl uppercase tracking-wide"
          style={{ color: "var(--brutal-black)" }}
        >
          {title}
        </h2>

        {/* Brutal line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          className="flex-1 h-1 origin-left"
          style={{
            background: "var(--brutal-black)",
          }}
        />
      </div>

      {/* Section content */}
      <div className="space-y-4">
        {children}
      </div>
    </motion.section>
  );
}
