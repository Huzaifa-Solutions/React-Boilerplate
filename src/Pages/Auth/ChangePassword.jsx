import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Lock, Eye, EyeOff, Loader2, ShieldCheck, Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log("Password reset successfully:", data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/reset-success");
    }, 2000);
  };

  const passwordCriteria = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center lg:text-left space-y-1">
        <h2 className="text-3xl dark:text-white font-bold tracking-tight">
          Set New Password
        </h2>
        <p className="dark:text-white leading-relaxed">
          Create a secure password to protect your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label className="font-semibold dark:text-white" htmlFor="password">
            New Password
          </Label>
          <div className="relative group">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
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
          <div className="grid grid-cols-1 gap-1.5 mt-2.5">
            {passwordCriteria.map((criterion, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${criterion.met ? "bg-green/30 text-green-500" : "bg-muted text-muted-foreground"}`}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </div>
                <span
                  className={`text-[11px] font-medium transition-colors ${criterion.met ? "text-green-500" : "text-muted-foreground"}`}
                >
                  {criterion.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            className="font-semibold dark:text-white"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </Label>
          <div className="relative group">
            <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className={`pl-11 pr-11 h-12 transition-all ${errors.confirmPassword ? "border-red ring-red/20 focus-visible:ring-red/20" : "focus:ring-primary/20"}`}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Passwords do not match";
                  }
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm font-medium text-red mt-1">
              {errors.confirmPassword.message}
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
              Resetting Password...
            </>
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
