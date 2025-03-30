import React, { type ReactNode } from "react";
import { SiDiscord, SiGithub, SiGoogle } from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react"; 
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  return (
    <div className="bg-zinc-950 flex h-screen items-center text-zinc-200 selection:bg-zinc-600">
      <BubbleButton className="absolute left-4 top-6 text-sm" onClick={() => router.push("/")}> 
        <FiArrowLeft />
        Go back
      </BubbleButton>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto w-full max-w-xl p-4"
      >
        <Heading />
        <SocialOptions />
        <Terms />
      </motion.div>

      <CornerGrid />
    </div>
  );
};

const Heading = () => (
  <div>
    <NavLogo />
    <div className="mb-9 mt-6 space-y-1.5">
      <h1 className="text-2xl font-semibold">Sign in to your account</h1>
      <p className="text-zinc-400">
        {"Don't"} have an account?{" "}
        <a href="#" className="text-blue-400">
          Create one.
        </a>
      </p>
    </div>
  </div>
);

const SocialOptions = () => {
  const { data: sessionData } = useSession();
  return <div>  
    <div className="flex-row flex gap-3"> 
      <BubbleButton className="flex w-full justify-center py-3" 
        onClick={async () => {
          alert("GitHub sign-in is not yet implemented.");
        }}>
        <SiGithub />
      </BubbleButton>
      <BubbleButton className="flex w-full justify-center py-3" 
        onClick={async () => {
          if (sessionData) { 
            await signOut();
          } else { 
            await signIn("discord", {
              callbackUrl: "/lobby",
            }); 
          }
        }}>
        <SiDiscord />
      </BubbleButton>
    </div>
    <BubbleButton className="flex w-full justify-center py-3 mt-3" 
      onClick={async () => {
        alert("Google sign-in is not yet implemented.");
      }}>
      <SiGoogle />
    </BubbleButton>
  </div>;
};  

const Terms = () => (
  <p className="mt-9 text-xs text-zinc-400">
    By signing in, you agree to our{" "}
    <a href="#" className="text-blue-400">
      Terms & Conditions
    </a>{" "}
    and{" "}
    <a href="#" className="text-blue-400">
      Privacy Policy.
    </a>
  </p>
);

const BubbleButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <Button 
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};

const CornerGrid = () => {
  return (
    <div
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }}
      className="absolute right-0 top-0 z-0 size-[50vw]"
    >
      <div
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))",
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

const NavLogo = () => {
  return (
    <Link href="/" className=" flex flex-row items-center w-fit justify-around rounded-xl"> 
      <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center">     
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">  
          <g clip-path="url(#clip0_235_973)"> 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M100 -4.37114e-06C155.228 -6.78525e-06 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 5.67237e-06 155.228 3.25826e-06 100C8.44143e-07 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06ZM100 -4.37114e-06C138.108 -6.03688e-06 169 30.8923 169 69C169 107.108 138.108 138 100 138C61.8924 138 31 107.108 31 69C31 30.8923 61.8924 -2.7054e-06 100 -4.37114e-06ZM132 69C132 51.3269 117.673 37 100 37C82.3269 37 68 51.3269 68 69C68 86.6731 82.3269 101 100 101C117.673 101 132 86.6731 132 69Z" fill="url(#paint0_linear_235_973)"/>
          </g> 
          <defs>
            <linearGradient id="paint0_linear_235_973" x1="-9.344e-06" y1="23" x2="152.5" y2="160.5" gradientUnits="userSpaceOnUse"> 
              <stop stop-color="#B0B9FF"/> 
              <stop offset="1" stop-color="#E7E9FF"/> 
            </linearGradient> 
            <clipPath id="clip0_235_973">
              <rect width="200" height="200" fill="white" transform="translate(7.62939e-06 200) rotate(-90)"/>
            </clipPath>
          </defs>
        </svg> 
      </div>   
      <svg width="150" height="70" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <text x="20" y="50" font-family="Verdana, sans-serif" font-size="50" font-weight="bold" fill="white">Tabacc</text>   
      </svg>      
    </Link>
  );
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;