"use client";
import { motion } from "framer-motion";

export default function Frontpage() {
  const titleA = "WEDDING";
  const titleB = "DAY";
  const names = "LONGDY & SREYPOV";
  const date = "22.04.2026";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.5 * i 
      },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="relative bg-[url('/images/background.jpg')] bg-cover bg-center h-full w-full">
      <div className="bg-gray-800/40 w-full h-full p-8 text-center flex flex-col justify-center items-center">
        
        {/* Title A: WEDDING */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="flex flex-row"
        >
          {titleA.split("").map((char, index) => (
            <motion.span key={index} variants={childVariants} className="text-amber-50 text-6xl font-serif">
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Title B: DAY */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="flex flex-row mb-6"
        >
          {titleB.split("").map((char, index) => (
            <motion.span key={index} variants={childVariants} className="text-amber-50 text-6xl font-serif">
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Names: LONGDY & SREYPOV */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-amber-50 text-[30px] font-serif border-y border-amber-50/30 py-2 my-4"
        >
          {names}
        </motion.p>

        {/* Date */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="text-amber-50 text-2xl font-light tracking-widest"
        >
          {date}
        </motion.p>
        
      </div>
    </div>
  );
}