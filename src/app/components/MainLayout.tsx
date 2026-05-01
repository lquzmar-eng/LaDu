import { Outlet, useLocation, Link } from "react-router";
import { Home, BarChart3, CalendarDays, MoreHorizontal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function MainLayout() {
  const location = useLocation();
  const { language } = useLanguage();

  const navItems = [
    { path: "/", icon: Home, label: language === "ar" ? "الرئيسية" : "Home" },
    { path: "/planning", icon: CalendarDays, label: language === "ar" ? "التخطيط" : "Planning" },
    { path: "/statistics", icon: BarChart3, label: language === "ar" ? "الإحصائيات" : "Statistics" },
    { path: "/settings", icon: MoreHorizontal, label: language === "ar" ? "المزيد" : "More" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-inset-bottom">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#0F3D2E]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
