import { useLanguage } from "../contexts/LanguageContext";
import { TrendingUp, AlertCircle, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router";

export function PersonalizedDashboard() {
  const { language } = useLanguage();
  const userType = localStorage.getItem("userType") || "employee";

  const dashboards = {
    student: {
      title: language === "ar" ? "المصروف الأسبوعي" : "Weekly Allowance",
      remaining: 150,
      total: 500,
      message: language === "ar"
        ? "باقي معك 150 $ لهذا الأسبوع"
        : "You have 150 USD left this week",
      tip: language === "ar"
        ? "لو وفرت 30 $ يومياً تقدر توصل لهدفك!"
        : "Save 30 USD daily to reach your goal!",
      icon: DollarSign,
      color: "#3B82F6",
    },
    employee: {
      title: language === "ar" ? "الراتب مقابل المصروفات" : "Salary vs Expenses",
      remaining: 2800,
      total: 5000,
      message: language === "ar"
        ? "صرفت 44% من راتبك الشهري"
        : "You've spent 44% of your monthly salary",
      tip: language === "ar"
        ? "متبقي 15 يوم للراتب القادم، خلي بالك من الالتزامات"
        : "15 days until next salary, watch your commitments",
      icon: Calendar,
      color: "#0F3D2E",
    },
    freelancer: {
      title: language === "ar" ? "الدخل المتغير" : "Variable Income",
      remaining: 3500,
      total: 7000,
      message: language === "ar"
        ? "دخلك هذا الشهر أقل من المعتاد بـ 15%"
        : "Your income this month is 15% lower than usual",
      tip: language === "ar"
        ? "حاول توزع دخلك على الأسابيع القادمة"
        : "Try distributing your income across upcoming weeks",
      icon: TrendingUp,
      color: "#8B5CF6",
    },
    other: {
      title: language === "ar" ? "الميزانية الشهرية" : "Monthly Budget",
      remaining: 1200,
      total: 3000,
      message: language === "ar"
        ? "أنت على المسار الصحيح!"
        : "You're on track!",
      tip: language === "ar"
        ? "استمر في تتبع مصروفاتك يومياً"
        : "Keep tracking your expenses daily",
      icon: AlertCircle,
      color: "#6B7280",
    },
  };

  const dashboard = dashboards[userType as keyof typeof dashboards] || dashboards.other;
  const Icon = dashboard.icon;
  const percentage = (dashboard.remaining / dashboard.total) * 100;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border-2" style={{ borderColor: `${dashboard.color}20` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${dashboard.color}20` }}>
          <Icon className="w-6 h-6" style={{ color: dashboard.color }} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">{dashboard.title}</p>
          <p className="text-lg text-gray-900">{dashboard.message}</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              background: `linear-gradient(to right, ${dashboard.color}, ${dashboard.color}dd)`,
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-sm">
          <p className="text-gray-600">
            {dashboard.remaining.toLocaleString()} {language === "ar" ? "$ متبقي" : "EGP left"}
          </p>
          <p className="text-gray-500">
            {dashboard.total.toLocaleString()} {language === "ar" ? "$" : "USD"}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-100">
        <p className="text-xs text-gray-700">💡 {dashboard.tip}</p>
      </div>

      <div className="mt-3 flex gap-2">
        {userType === "student" && (
          <Link
            to="/planning"
            className="flex-1 text-center py-2 rounded-lg text-xs text-white"
            style={{ backgroundColor: dashboard.color }}
          >
            {language === "ar" ? "خطط ميزانيتك" : "Plan Budget"}
          </Link>
        )}
        {userType === "employee" && (
          <>
            <Link
              to="/planning"
              className="flex-1 text-center py-2 rounded-lg text-xs text-white"
              style={{ backgroundColor: dashboard.color }}
            >
              {language === "ar" ? "الالتزامات" : "Commitments"}
            </Link>
            <Link
              to="/income"
              className="flex-1 text-center py-2 rounded-lg text-xs border"
              style={{ borderColor: dashboard.color, color: dashboard.color }}
            >
              {language === "ar" ? "إدارة الدخل" : "Manage Income"}
            </Link>
          </>
        )}
        {userType === "freelancer" && (
          <>
            <Link
              to="/income"
              className="flex-1 text-center py-2 rounded-lg text-xs text-white"
              style={{ backgroundColor: dashboard.color }}
            >
              {language === "ar" ? "تتبع المشاريع" : "Track Projects"}
            </Link>
            <Link
              to="/planning"
              className="flex-1 text-center py-2 rounded-lg text-xs border"
              style={{ borderColor: dashboard.color, color: dashboard.color }}
            >
              {language === "ar" ? "وزع الدخل" : "Distribute Income"}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
