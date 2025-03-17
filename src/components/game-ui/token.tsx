import React from "react"; 
import { motion } from "framer-motion";

export const Token: React.FC<{total?: number}> = ({
  total
}) => {
  return (
    <motion.div
      className="flex flex-row gap-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/deck/token.png" alt="token" className="w-32 h-32" />
    </motion.div>
  );
};