import { cn } from "@/lib/utils"

const Shell: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) =>  {
  return (
    <div {...props} className={cn("relative h-screen w-screen", className)}>
      {children}
    </div>
  );
}

export { Shell };
