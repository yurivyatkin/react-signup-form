import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // default: "px-[14px] py-[10px] bg-[#404eff] rounded-[25px] border border-solid border-[#4f93ff] shadow-sm text-white hover:bg-[#4f93ff] hover:text-white [font-family:'Poppins',Helvetica] text-[20px]",
      },
      size: {
        default: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
