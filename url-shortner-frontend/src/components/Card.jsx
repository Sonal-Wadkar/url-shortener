import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        bg-[#BDC4D4]
        border
        border-[#52677D]
        flex
        flex-col
        px-5
        py-8
        gap-3
        rounded-lg
        shadow-md
        shadow-[#52677D]/40
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h1 className="text-[#0F1A2B] text-xl font-bold">
        {title}
      </h1>

      <p className="text-[#52677D] text-sm leading-6">
        {desc}
      </p>
    </motion.div>
  );
};

export default Card;