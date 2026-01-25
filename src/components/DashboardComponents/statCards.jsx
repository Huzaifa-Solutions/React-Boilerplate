import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <Card className="bg-[#1a1818] border-[#363A42] hover:shadow-[0_0_20px] transition-shadow hover:shadow-[#2c20c9]/50">
    <CardContent className="">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-light">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
          {change !== undefined && (
            <div
              className={`flex items-center gap-0.5 mt-1 text-sm ${
                trend === "up" ? "text-green" : "text-red"
              }`}
            >
              {trend === "up" ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              <span>{change}%</span>
              <span className="text-light ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-gradient-to-r from-[#4885e8]/80 to-[#2c20c9]/80 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StatCard;
