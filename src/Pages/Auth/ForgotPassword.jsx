import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mail, ChevronLeft, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log("Reset link sent to:", data.email);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/verify-otp", { state: { email: data.email } });
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <Link
        to="/auth/login"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-2"
      >
        <ChevronLeft className="mr-1 w-4 h-4" />
        Back to Login
      </Link>

      <div className="text-center lg:text-left space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Forgot Password?</h2>
        <p className="text-muted-foreground leading-relaxed">
          No worries! Enter your email address and we'll send you a 6-digit code
          to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-foreground/80">
            Email Address
          </Label>
          <div className="relative group">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              className={`pl-11 h-12 transition-all ${errors.email ? "border-red ring-red/20 focus-visible:ring-red/20" : "focus:ring-primary/20"}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-sm font-medium text-red mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold hover:opacity-95 shadow-md active:scale-[0.98] transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Code...
            </>
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
