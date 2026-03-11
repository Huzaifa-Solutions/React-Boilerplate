import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ReactLogo } from "../../assets/svgs";
import SidebarContent from "./sidebarContent";
import { SwitchTheme } from "@/components/ui/switchTheme";

const AdminLayout = () => { 
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300 relative
          ${collapsed ? "w-[70px]" : "w-[240px]"}
        `}
      >
        <SidebarContent collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="w-[280px] p-0 bg-card border-border"
        >
          <SidebarContent onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
            >
              <Menu className="size-[22px]" />
            </Button>
            <img className="mx-auto" src={ReactLogo} alt="" />
            <span className="font-semibold">React Project Starter</span>
          </div>

          <div className="flex items-center gap-3">
            <SwitchTheme />
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-border">
              <Avatar className="w-8 h-8">
                <AvatarImage src={ReactLogo} />
                <AvatarFallback className="bg-gradient-to-r from-yellow to-orange text-white text-sm">
                  A
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
