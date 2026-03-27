"use client";
import { motion } from "framer-motion";

interface FrontpageProps {
  isOnlyBackground: boolean;
  isOnlyText: boolean;
}

export default function Frontpage({ isOnlyBackground, isOnlyText }: FrontpageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const titleA = "WEDDING";
  const titleB = "DAY";
  const names = "LONGDY & SREYPOV";
  const date = "22.04.2026";

  // ... (Keep your variants exactly as they are)

  // IF BACKGROUND ONLY
  if (isOnlyBackground) {
    return (
      <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center h-full w-[600px]">
        <div className="bg-gray-800/40 w-full h-full" />
      </div>
    );
  }

  // IF TEXT ONLY
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-row">
        {titleA.split("").map((char, index) => (
          <motion.span key={index} variants={childVariants} className="text-amber-50 text-6xl font-serif">
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-row mb-6">
        {titleB.split("").map((char, index) => (
          <motion.span key={index} variants={childVariants} className="text-amber-50 text-6xl font-serif">
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1.8, duration: 1 }}
        className="text-amber-50 text-[30px] font-serif border-y border-amber-50/30 py-2 my-4 whitespace-nowrap px-4"
      >
        {names}
      </motion.p>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2.2, duration: 1 }}
        className="text-amber-50 text-2xl font-light tracking-widest"
      >
        {date}
      </motion.p>
    </div>
  );
}