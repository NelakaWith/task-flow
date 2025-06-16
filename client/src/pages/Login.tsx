import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthFormWrapper } from "@/components/auth/AuthFormWrapper";
import { InputField } from "@/components/auth/InputField";
import { PasswordField } from "@/components/auth/PasswordField";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { login } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex flex-col justify-center items-center bg-slate-100 w-1/2 p-8">
        <div className="text-3xl font-bold mb-2">TaskFlow</div>
        <div className="text-muted-foreground mb-4">
          Welcome back! Please login to your account.
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Card className="max-w-md w-full px-4 md:px-8">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <AuthFormWrapper
              schema={schema}
              defaultValues={{ email: "", password: "" }}
              onSubmit={async (data) => {
                try {
                  await login(data);
                  toast.success("Login successful");
                  navigate("/");
                } catch (err: unknown) {
                  toast.error(
                    err &&
                      typeof err === "object" &&
                      "response" in err &&
                      err.response &&
                      typeof err.response === "object" &&
                      "data" in err.response &&
                      err.response.data &&
                      typeof err.response.data === "object" &&
                      "message" in err.response.data
                      ? (err.response.data.message as string)
                      : "Invalid credentials"
                  );
                }
              }}
            >
              <InputField name="email" label="Email" type="email" />
              <PasswordField name="password" label="Password" />
              <SubmitButton label="Login" />
            </AuthFormWrapper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
