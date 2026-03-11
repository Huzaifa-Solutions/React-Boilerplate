import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Mail, Lock, User, Eye, EyeOff, Loader2, Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log("Signup data:", data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const passwordCriteria = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center lg:text-left space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
        <p className="text-muted-foreground">
          Join Nexus AI and start your journey today.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="fullName"
              placeholder="John Doe"
              className={`pl-11 h-12 transition-all ${errors.fullName ? "border-red ring-red/20 focus-visible:ring-red/20" : "focus:ring-primary/20"}`}
              {...register("fullName", { required: "Full Name is required" })}
            />
          </div>
          {errors.fullName && (
            <p className="text-sm font-medium text-red mt-1 animate-in fade-in slide-in-from-top-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
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
            <p className="text-sm font-medium text-red mt-1 animate-in fade-in slide-in-from-top-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className={`pl-11 pr-11 h-12 transition-all ${errors.password ? "border-red ring-red/20 focus-visible:ring-red/20" : "focus:ring-primary/20"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1.5 mt-2">
            {passwordCriteria.map((criterion, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${criterion.met ? "bg-green/10 text-green" : "bg-muted text-muted-foreground"}`}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </div>
                <span
                  className={`text-[11px] font-medium transition-colors ${criterion.met ? "text-green" : "text-muted-foreground"}`}
                >
                  {criterion.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-2 py-1">
          <input
            id="terms"
            type="checkbox"
            className="mt-1 w-4 h-4 rounded-sm border border-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            {...register("terms", { required: true })}
          />
          <Label
            htmlFor="terms"
            className="text-sm font-normal text-muted-foreground leading-snug cursor-pointer select-none"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-primary hover:underline underline-offset-4"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-primary hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold primary-gradient hover:opacity-90 transition-opacity"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground pt-4">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
