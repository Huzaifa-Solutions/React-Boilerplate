import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, Loader2, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyOTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otpValue.length !== 6) return;

    setIsLoading(true);
    console.log("Verifying OTP:", otpValue);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/change-password");
    }, 2000);
  };

  const handleResend = () => {
    setTimer(60);
    console.log("OTP Resent to:", email);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <Link
        to="/auth/forgot-password"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-2"
      >
        <ChevronLeft className="mr-1 w-4 h-4" />
        Back
      </Link>

      <div className="text-center lg:text-left space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Check Your Email</h2>
        <p className="text-muted-foreground leading-relaxed">
          We&apos;ve sent a 6-digit verification code to{" "}
          <span className="text-foreground font-semibold">{email}</span>.
        </p>
      </div>

      <div className="space-y-6 pt-4 flex flex-col items-center lg:items-start">
        <div className="space-y-3 w-full">
          <p className="text-sm font-semibold text-center lg:text-left text-foreground/70">
            Enter code
          </p>
          <div className="flex justify-center lg:justify-start">
            <InputOTP
              maxLength={6}
              value={otpValue}
              onChange={(v) => setOtpValue(v)}
              className="gap-3"
            >
              <InputOTPGroup className="gap-2 sm:gap-3">
                <InputOTPSlot
                  index={0}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
                <InputOTPSlot
                  index={1}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
                <InputOTPSlot
                  index={2}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
                <InputOTPSlot
                  index={3}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
                <InputOTPSlot
                  index={4}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
                <InputOTPSlot
                  index={5}
                  className="w-12 h-14 sm:w-14 sm:h-16 text-xl font-bold bg-muted/50 border-2 rounded-xl focus:border-primary transition-all shadow-sm"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        <Button
          onClick={handleVerify}
          className="w-full h-12 text-base font-semibold hover:opacity-95 shadow-md active:scale-[0.98] transition-colors duration-300"
          disabled={isLoading || otpValue.length !== 6}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </Button>

        <div className="w-full text-center lg:text-left flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-sm">
          <span className="text-muted-foreground">
            Didn&apos;t receive the code?
          </span>
          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`font-semibold inline-flex items-center gap-1.5 transition-colors ${timer > 0 ? "text-muted-foreground/50 cursor-not-allowed" : "text-primary hover:text-primary/80"}`}
          >
            {timer > 0 ? (
              `Resend code in ${timer}s`
            ) : (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                Resend Code
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
