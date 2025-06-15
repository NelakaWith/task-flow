// Re-export toast from sonner and provide a useToast hook for compatibility
import { toast } from "sonner";

export function useToast() {
  return { toast };
}

export { toast };
