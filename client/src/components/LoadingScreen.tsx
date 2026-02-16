import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

interface Block {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}

function generateBlocks(): Block[] {
  const colors = [
    "var(--brutal-red)",
    "var(--brutal-red)",
    "var(--brutal-tan)",
    "var(--brutal-tan)",
    "var(--brutal-black)",
    "var(--brutal-black)",
    "var(--brutal-cream)",
  ];

  const blocks: Block[] = [];
  const grid: boolean[][] = Array.from({ length: 20 }, () =>
    Array(20).fill(false)
  );

  // Fill the grid with random sized blocks
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 20; col++) {
      if (grid[row][col]) continue;

      // Random block size (1-4 cells wide/tall)
      const maxW = Math.min(4, 20 - col);
      const maxH = Math.min(4, 20 - row);
      const w = 1 + Math.floor(Math.random() * Math.min(maxW, 3));
      const h = 1 + Math.floor(Math.random() * Math.min(maxH, 3));

      // Check if space is free
      let fits = true;
      for (let r = row; r < row + h && fits; r++) {
        for (let c = col; c < col + w && fits; c++) {
          if (grid[r][c]) fits = false;
        }
      }

      if (!fits) continue;

      // Mark grid
      for (let r = row; r < row + h; r++) {
        for (let c = col; c < col + w; c++) {
          grid[r][c] = true;
        }
      }

      blocks.push({
        x: (col / 20) * 100,
        y: (row / 20) * 100,
        w: (w / 20) * 100,
        h: (h / 20) * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  return blocks;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const blocks = useMemo(() => generateBlocks(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 300);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        const step = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + step, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: "var(--brutal-black)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Color blocks */}
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.008,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                background: block.color,
                left: `${block.x}%`,
                top: `${block.y}%`,
                width: `${block.w}%`,
                height: `${block.h}%`,
                border: "1px solid var(--brutal-black)",
              }}
            />
          ))}

          {/* Counter */}
          <motion.div
            className="relative z-10 font-display font-bold uppercase tracking-tight"
            style={{
              color: "var(--brutal-cream)",
              fontSize: "clamp(4rem, 15vw, 10rem)",
              textShadow: "4px 4px 0px var(--brutal-black)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
