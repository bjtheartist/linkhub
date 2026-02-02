/*
 * DESIGN: Neo-Brutalist Red & Tan - LinkCard Component
 * - Heavy black borders (3px)
 * - Hard drop shadows that shift on hover
 * - Sharp edges, minimal rounding
 * - Bold typography with uppercase labels
 */

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
  index: number;
  category?: string;
}

export function LinkCard({ title, description, url, icon, index }: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -30, rotate: -2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ 
        x: 4,
        y: 4,
        transition: { duration: 0.15 }
      }}
      whileTap={{ 
        x: 6, 
        y: 6,
        transition: { duration: 0.1 }
      }}
      className="group relative block w-full"
    >
      {/* Main card */}
      <div 
        className="relative p-4 sm:p-5 overflow-hidden transition-shadow duration-150"
        style={{
          background: "var(--brutal-cream)",
          border: "3px solid var(--brutal-black)",
          boxShadow: "6px 6px 0px var(--brutal-black)",
        }}
      >
        {/* Hover state - shadow shrinks */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          style={{
            background: "var(--brutal-cream)",
            border: "3px solid var(--brutal-black)",
          }}
        />

        <div className="relative flex items-center gap-4">
          {/* Icon container */}
          {icon && (
            <div 
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
              style={{
                background: "var(--brutal-tan)",
                border: "2px solid var(--brutal-black)",
              }}
            >
              <span className="text-foreground">{icon}</span>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 
              className="font-display font-bold text-base sm:text-lg uppercase tracking-wide truncate"
              style={{ color: "var(--brutal-black)" }}
            >
              {title}
            </h3>
            {description && (
              <p 
                className="text-sm mt-1 line-clamp-1"
                style={{ color: "var(--brutal-black)", opacity: 0.7 }}
              >
                {description}
              </p>
            )}
          </div>

          {/* Arrow indicator */}
          <div 
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-150 group-hover:bg-[var(--brutal-red)]"
            style={{
              background: "var(--brutal-tan)",
              border: "2px solid var(--brutal-black)",
            }}
          >
            <ArrowUpRight 
              className="w-5 h-5 transition-colors duration-150 group-hover:text-[var(--brutal-cream)]" 
              style={{ color: "var(--brutal-black)" }}
            />
          </div>
        </div>

        {/* Red accent line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-[var(--brutal-red)]"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Shadow element that stays in place */}
      <div 
        className="absolute inset-0 -z-10 transition-opacity duration-150 group-hover:opacity-50"
        style={{
          background: "var(--brutal-black)",
          transform: "translate(6px, 6px)",
        }}
      />
    </motion.a>
  );
}
