import type React from "react";
import { Token } from "./token";
import { motion } from "framer-motion";

export const UserTokens: React.FC = () => {
  return (
    <motion.div className="flex flex-row gap-4 relative">
      <div className="absolute left-14 rotate-[10deg]">
        <Token total={3} />
      </div>
      <div className="rotate-[-10deg]">
        <Token />
      </div>
    </motion.div>
  );
};