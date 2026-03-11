import { useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { NavLink } from "react-router-dom";

const NavItem = ({ item, collapsed, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  const content = (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-gradient-to-r from-[#4885e8] to-[#2c20c9] hover:bg-gradient-to-r hover:from-[#2c20c9] hover:to-[#4885e8] text-white"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }
        ${collapsed ? "justify-center" : ""}
      `}
    >
      <item.icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
      {!collapsed && <span className="font-medium">{item.label}</span>}
    </NavLink>
  );

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-popover border-border text-popover-foreground font-semibold tracking-wide font-arial"
        >
          {item.label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
};

export default NavItem;
