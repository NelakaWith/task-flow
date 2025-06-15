import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormMessage } from "@/components/ui/form-message";
import { useFormContext, Controller, type FieldValues } from "react-hook-form";
import type { FC } from "react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
}) => {
  const { control } = useFormContext<FieldValues>();
  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Input id={name} type={type} placeholder={placeholder} {...field} />
            <FormMessage>{fieldState.error?.message}</FormMessage>
          </>
        )}
      />
    </div>
  );
};
