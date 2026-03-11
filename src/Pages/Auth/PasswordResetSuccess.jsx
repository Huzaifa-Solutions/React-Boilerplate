import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const PasswordResetSuccess = () => {
  return (
    <div className="text-center space-y-6 animate-in zoom-in-95 fade-in duration-700">
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-green/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative w-24 h-24 bg-green/10 rounded-full flex items-center justify-center border-4 border-green/20">
            <CheckCircle2 className="w-12 h-12 text-green animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 bg-yellow/50 p-2 rounded-full border border-yellow/30">
            <PartyPopper className="w-5 h-5 text-yellow animate-tada" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl dark:text-white font-extrabold tracking-tight">Password Reset!</h2>
        <p className="dark:text-white max-w-sm mx-auto">
          Your password has been successfully reset. You can now use your new password to sign in to your account.
        </p>
      </div>

      <div className="space-y-4">
        <Link to="/auth/login">
          <Button className="w-full h-14 text-lg font-bold primary-gradient hover:opacity-95 shadow-lg group transition-colors duration-300">
            Go to Login
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-5">
          Need help? <a href="#" className="font-semibold text-primary hover:underline underline-offset-4">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
