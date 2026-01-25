import { ChevronLeft, LayoutDashboard } from "lucide-react";
import { ReactLogo } from "../../assets/svgs";
import NavItem from "./navItems";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

const SidebarContent = ({ collapsed, setCollapsed, onNavigate }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        } px-4 py-5`}
      >
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={ReactLogo} alt="" />
            </div>
            <span className="font-bold text-white">Project Starter</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={ReactLogo} alt="" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed?.(!collapsed)}
          className={`hidden lg:flex text-light hover:text-black ${
            collapsed
              ? "absolute -right-3 top-6 bg-[#1a1818] border border-[#363A42] rounded-full w-6 h-6 p-0"
              : ""
          }`}
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      <Separator className="bg-[#363A42]" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            collapsed={collapsed}
            onClick={onNavigate}
          />
        ))}
      </nav>

      <Separator className="bg-[#363A42]" />

      {/* User Section */}
      <div className={`p-3 ${collapsed ? "flex justify-center" : ""}`}>
        <Button
          variant="ghost"
          className={`w-full py-7 ${
            collapsed ? "p-0 h-auto" : "justify-start"
          } text-light hover:text-white hover:bg-[#2a2828] h-10`}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src={ReactLogo} />
            <AvatarFallback className="bg-gradient-to-r from-[#FEC36D] to-[#D78001] text-white text-sm">
              A
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="ml-3 text-left">
              <p className="text-sm font-medium text-white">Admin</p>
              <p className="text-xs text-light">admin@example.com</p>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SidebarContent;
