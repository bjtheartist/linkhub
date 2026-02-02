/*
 * DESIGN: Neo-Brutalist Red & Tan - SubCategory Component
 * - Collapsible subcategory within a category block
 * - Smaller, nested styling
 */

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface SubCategoryProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function SubCategory({ title, icon, children, defaultOpen = false }: SubCategoryProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      {/* Subcategory header */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-full text-left mb-2"
        whileHover={{ x: 2, y: 2 }}
        whileTap={{ x: 3, y: 3 }}
        transition={{ duration: 0.1 }}
      >
        {/* Shadow */}
        <div 
          className="absolute inset-0 transition-opacity duration-150 group-hover:opacity-70"
          style={{
            background: "var(--brutal-black)",
            transform: "translate(4px, 4px)",
          }}
        />

        {/* Button content */}
        <div 
          className="relative p-3 flex items-center gap-3"
          style={{
            background: isOpen ? "var(--brutal-tan)" : "var(--brutal-cream)",
            border: "2px solid var(--brutal-black)",
          }}
        >
          {/* Icon */}
          <div 
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            style={{
              background: "var(--brutal-red)",
              border: "2px solid var(--brutal-black)",
            }}
          >
            <span style={{ color: "var(--brutal-cream)" }}>{icon}</span>
          </div>

          {/* Title */}
          <span 
            className="font-display font-bold text-sm uppercase tracking-wide flex-1"
            style={{ color: "var(--brutal-black)" }}
          >
            {title}
          </span>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown 
              className="w-5 h-5"
              style={{ color: "var(--brutal-black)" }}
            />
          </motion.div>
        </div>
      </motion.button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pl-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
