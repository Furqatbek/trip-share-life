import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const heroButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
  {
    variants: {
      variant: {
        primary: "hero-gradient text-white hover:scale-105 border-0",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
        outline: "border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm",
      },
      size: {
        default: "h-12 px-8 py-3 rounded-full",
        lg: "h-14 px-10 py-4 rounded-full text-lg",
        xl: "h-16 px-12 py-5 rounded-full text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface HeroButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {}

const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";

export { HeroButton, heroButtonVariants };