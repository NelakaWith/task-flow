import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";

interface SubmitButtonProps {
  label: string;
  loading?: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ label, loading }) => {
  const { formState } = useFormContext();
  return (
    <Button
      type="submit"
      disabled={loading || formState.isSubmitting}
      className="w-full mt-2"
    >
      {loading || formState.isSubmitting ? "Loading..." : label}
    </Button>
  );
};
