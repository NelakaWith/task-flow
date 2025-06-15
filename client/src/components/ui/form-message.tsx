import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FormMessageProps {
  children?: ReactNode;
  className?: string;
}

export function FormMessage({ children, className }: FormMessageProps) {
  if (!children) return null;
  return (
    <p className={cn("text-sm text-red-600 mt-1", className)}>{children}</p>
  );
}
