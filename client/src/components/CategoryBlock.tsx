/*
 * DESIGN: Neo-Brutalist Red & Tan - CategoryBlock Component
 * - Large clickable category blocks
 * - Expands to reveal subcategories
 * - Binary tree-like navigation structure
 */

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface CategoryBlockProps {
  title: string;
  icon: ReactNode;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
  children: ReactNode;
  index: number;
}

export function CategoryBlock({ 
  title, 
  icon, 
  description, 
  isExpanded, 
  onClick, 
  children,
  index 
}: CategoryBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-4"
    >
      {/* Main category button */}
      <motion.button
        onClick={onClick}
        className="group relative w-full text-left"
        whileHover={{ x: 4, y: 4 }}
        whileTap={{ x: 6, y: 6 }}
        transition={{ duration: 0.15 }}
      >
        {/* Shadow */}
        <div 
          className="absolute inset-0 transition-opacity duration-150"
          style={{
            background: "var(--brutal-black)",
            transform: "translate(6px, 6px)",
          }}
        />

        {/* Button content */}
        <div 
          className="relative p-5 transition-colors duration-150"
          style={{
            background: isExpanded ? "var(--brutal-red)" : "var(--brutal-cream)",
            border: "3px solid var(--brutal-black)",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div 
              className="w-14 h-14 flex items-center justify-center flex-shrink-0 transition-colors duration-150"
              style={{
                background: isExpanded ? "var(--brutal-cream)" : "var(--brutal-tan)",
                border: "2px solid var(--brutal-black)",
              }}
            >
              <span 
                className="text-2xl transition-colors duration-150"
                style={{ color: "var(--brutal-black)" }}
              >
                {icon}
              </span>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2 
                className="font-display font-bold text-xl uppercase tracking-wide transition-colors duration-150"
                style={{ color: isExpanded ? "var(--brutal-cream)" : "var(--brutal-black)" }}
              >
                {title}
              </h2>
              <p 
                className="text-sm mt-1 transition-colors duration-150"
                style={{ 
                  color: isExpanded ? "var(--brutal-cream)" : "var(--brutal-black)",
                  opacity: 0.7 
                }}
              >
                {description}
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronRight 
                className="w-8 h-8 transition-colors duration-150"
                style={{ color: isExpanded ? "var(--brutal-cream)" : "var(--brutal-black)" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div 
              className="pt-4 pl-4 border-l-4 ml-6"
              style={{ borderColor: "var(--brutal-red)" }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
