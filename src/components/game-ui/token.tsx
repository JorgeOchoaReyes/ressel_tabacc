import React from "react"; 
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export const Token: React.FC<{total?: number}> = ({
  total
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="flex flex-row gap-1 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}

            drag={true}
            whileHover={{ scale: 1.1 }}
            whileDrag={{ scale: 1.2, }}
            dragMomentum = {false}

            dragConstraints = {{ top: 0, left: 0, right: 0, bottom: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <img src="/deck/token.png" alt="token" className="w-32 h-32 unselectable" />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#000000] text-[#ffffff]">
          Tokens: {total}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};