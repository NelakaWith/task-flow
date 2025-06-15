import type { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  type SubmitHandler,
  type FieldValues,
  type DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthFormWrapperProps<T extends FieldValues> {
  schema: any; // Accept any Zod schema for resolver compatibility
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
}

export function AuthFormWrapper<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
}: AuthFormWrapperProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
}
