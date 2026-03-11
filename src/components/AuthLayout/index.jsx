import { Outlet } from "react-router-dom";
import { SwitchTheme } from "@/components/ui/switchTheme";
import AuthBg from "../../assets/images/auth-bg.png";
import { ReactLogo } from "../../assets/svgs";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex bg-background text-foreground transition-all duration-300">
      {/* Background Section (Visible on Large Screens) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-110"
          style={{ backgroundImage: `url(${AuthBg})` }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/60 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 text-white bg-black/30 backdrop-blur-[2px] w-full h-full">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <img src={ReactLogo} alt="Logo" className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Nexus AI</span>
            </div>
            
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Empowering your <br />
              <span className="text-yellow italic">digital experience</span>
            </h1>
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              Join our community of innovators and creators. Access powerful tools and insights with our next-gen platform.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>© 2026 Nexus AI Inc.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col relative">
        <div className="absolute top-6 right-6 z-20">
          <SwitchTheme />
        </div>
        
        <main className="flex-1 flex items-center justify-center p-6 sm:p-12 md:p-16">
          <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <img src={ReactLogo} alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">Nexus AI</span>
            </div>
            
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
