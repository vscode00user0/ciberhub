import { cn } from "@/lib/utils";

interface GlitchTitleProps {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GlitchTitle({ text, className, size = "lg" }: GlitchTitleProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-7xl",
  };

  return (
    <h1 
      className={cn(
        "font-display font-black uppercase leading-none tracking-tighter text-foreground glitch-text select-none",
        sizeClasses[size],
        className
      )}
      data-text={text}
    >
      {text}
    </h1>
  );
}
