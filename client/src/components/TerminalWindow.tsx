import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  variant?: "primary" | "red" | "blue";
  className?: string;
  delay?: number;
}

export function TerminalWindow({ 
  title, 
  children, 
  variant = "primary", 
  className,
  delay = 0 
}: TerminalWindowProps) {
  
  const colors = {
    primary: "border-primary text-primary shadow-primary/20",
    red: "border-red-500 text-red-500 shadow-red-500/20",
    blue: "border-sky-500 text-sky-500 shadow-sky-500/20",
  };

  const headerColors = {
    primary: "bg-primary/10 border-b-primary",
    red: "bg-red-500/10 border-b-red-500",
    blue: "bg-sky-500/10 border-b-sky-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative border-2 bg-black/90 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden",
        colors[variant],
        className
      )}
    >
      {/* Window Header */}
      <div className={cn(
        "flex items-center justify-between px-3 py-2 border-b-2 select-none",
        headerColors[variant]
      )}>
        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
          <span className="animate-pulse">_</span>
          {title}
        </h3>
        <div className="flex gap-2 opacity-75">
          <Minus className="w-3 h-3 md:w-4 md:h-4 cursor-pointer hover:opacity-100" />
          <Square className="w-3 h-3 md:w-4 md:h-4 cursor-pointer hover:opacity-100" />
          <X className="w-3 h-3 md:w-4 md:h-4 cursor-pointer hover:opacity-100" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-l-2 border-t-2 rotate-180 opacity-50 border-current" />
      <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 opacity-50 border-current" />
    </motion.div>
  );
}
