/*
 * DESIGN: Neo-Brutalist Red & Tan - ProfileHeader Component
 * - Bold bordered avatar frame
 * - Uppercase name with red underline
 * - Chunky, raw aesthetic
 */

import { motion } from "framer-motion";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  location?: string;
}

export function ProfileHeader({ name, bio, avatarUrl, location }: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mb-10"
    >
      {/* Avatar with brutal frame */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mb-6"
      >
        {/* Shadow */}
        <div 
          className="absolute inset-0"
          style={{
            background: "var(--brutal-black)",
            transform: "translate(8px, 8px)",
          }}
        />
        
        {/* Avatar container */}
        <div
          className="relative w-28 h-28 sm:w-36 sm:h-36 overflow-hidden flex items-center justify-center"
          style={{
            border: "4px solid var(--brutal-black)",
            background: "var(--brutal-red)",
          }}
        >
          <span
            className="font-display font-bold text-4xl sm:text-5xl uppercase select-none"
            style={{ color: "var(--brutal-cream)" }}
          >
            {name.split(" ").map(w => w[0]).join("")}
          </span>
        </div>

      </motion.div>

      {/* Name with red underline */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative mb-4"
      >
        <h1 
          className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight"
          style={{ color: "var(--brutal-black)" }}
        >
          {name}
        </h1>
        {/* Red underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -bottom-2 left-0 right-0 h-2 origin-left"
          style={{ background: "var(--brutal-red)" }}
        />
      </motion.div>

      {/* Location badge */}
      {location && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-2 mb-4 px-4 py-2 font-display text-sm font-bold uppercase"
          style={{
            background: "var(--brutal-tan)",
            border: "2px solid var(--brutal-black)",
            boxShadow: "3px 3px 0px var(--brutal-black)",
          }}
        >
          <span>📍</span>
          <span style={{ color: "var(--brutal-black)" }}>{location}</span>
        </motion.div>
      )}

      {/* Bio */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-base sm:text-lg max-w-md leading-relaxed"
        style={{ color: "var(--brutal-black)", opacity: 0.8 }}
      >
        {bio}
      </motion.p>
    </motion.div>
  );
}
