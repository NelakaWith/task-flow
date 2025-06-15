import * as React from "react";
import { cn } from "@/lib/utils";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={cn("space-y-4", className)} {...props} />
  )
);
Form.displayName = "Form";
