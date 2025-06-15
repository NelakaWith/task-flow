import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/ui/form-message";
import { useFormContext, Controller, type FieldValues } from "react-hook-form";
import type { FC } from "react";
import { useState } from "react";

interface PasswordFieldProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const PasswordField: FC<PasswordFieldProps> = ({
  name,
  label,
  placeholder,
}) => {
  const { control } = useFormContext<FieldValues>();
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <div className="relative">
              <Input
                id={name}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                {...field}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
                onClick={() => setShow((s) => !s)}
                tabIndex={-1}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </>
        )}
      />
    </div>
  );
};
