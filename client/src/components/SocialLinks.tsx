/*
 * DESIGN: Neo-Brutalist Red & Tan - SocialLinks Component
 * - Chunky bordered buttons
 * - Hard shadows that shift on hover
 * - Bold, tactile interaction
 */

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Instagram, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center justify-center gap-3 mb-10 flex-wrap"
    >
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5 + index * 0.08,
            type: "spring",
            stiffness: 300,
          }}
          whileHover={{ 
            x: 2,
            y: 2,
            transition: { duration: 0.1 }
          }}
          whileTap={{ 
            x: 4, 
            y: 4,
            transition: { duration: 0.05 }
          }}
          className="group relative"
          aria-label={link.name}
        >
          {/* Shadow */}
          <div 
            className="absolute inset-0 transition-opacity duration-150 group-hover:opacity-50"
            style={{
              background: "var(--brutal-black)",
              transform: "translate(4px, 4px)",
            }}
          />

          {/* Button */}
          <div 
            className="relative w-12 h-12 flex items-center justify-center transition-colors duration-150 group-hover:bg-[var(--brutal-red)]"
            style={{
              background: "var(--brutal-cream)",
              border: "3px solid var(--brutal-black)",
            }}
          >
            <span 
              className="transition-colors duration-150 group-hover:text-[var(--brutal-cream)]"
              style={{ color: "var(--brutal-black)" }}
            >
              {link.icon}
            </span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

export { iconMap };
