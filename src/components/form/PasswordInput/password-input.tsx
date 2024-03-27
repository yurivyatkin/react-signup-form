import * as React from "react";
import { LockClosedIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/Toggle";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const onToggleClick = () => {
    setShowPassword(!showPassword);
  };

    return (
      <div className="flex items-center bg-white rounded-[24px] px-3 py-2 w-full">
        <div className="mr-2"><LockClosedIcon /></div>
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-10 w-full outline-none px-1 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
       <Toggle aria-label="Toggle password visibility" onClick={onToggleClick}>
         {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
       </Toggle>
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput };
