import { useRef, useState } from "react"; 
import { motion } from "framer-motion";
 
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const CrypticButton: React.FC<{
    _text: string;
    _icon?: React.ReactNode;
    _onClick?: () => void;
    _size?: "sm" | "md" | "lg";
}> = ({ 
  _text,
  _icon,
  _onClick,
  _size: size = "lg",
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(_text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = _text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= _text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current ?? undefined);

    setText(_text);
  };

  const sizes = {
    sm: "py-1 px-2 text-xs", 
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-3xl",
  };

  const sizeClasses = sizes[size];

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={_onClick}
      className={"group relative overflow-hidden rounded-lg px-4 py-2 font-mono uppercase text-white transition-colors hover:text-indigo-300 font-extrabold" + sizeClasses}
    >
      <div className="relative z-10 flex items-center gap-2"> 
        {_icon}
        <span className={"text-3xl"}>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
 