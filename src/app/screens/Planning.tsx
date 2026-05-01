import { ArrowLeft, Sparkles, Calendar, Target, Plus, CheckCircle2, Trophy } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { PersonalizedDashboard } from "../components/PersonalizedDashboard";
import { motion } from "motion/react";

export function Planning() {
  const { language } = useLanguage();

  const budgets = [
    {
      category: language === "ar" ? "الطعام والمطاعم" : "Food & Dining",
      emoji: "🍔", budget: 1000, spent: 850, color: "#F59E0B"
    },
    {
      category: language === "ar" ? "المواصلات" : "Transport",
      emoji: "🚗", budget: 500, spent: 420, color: "#3B82F6"
    },
    {
      category: language === "ar" ? "الترفيه" : "Entertainment",
      emoji: "🎬", budget: 400, spent: 380, color: "#8B5CF6"
    },
    {
      category: language === "ar" ? "الفواتير" : "Bills",
      emoji: "📱", budget: 800, spent: 250, color: "#EF4444"
    },
    {
      category: language === "ar" ? "التسوق" : "Shopping",
      emoji: "🛍️", budget: 300, spent: 120, color: "#10B981"
    },
  ];

  const upcomingBills = [
    {
      name: language === "ar" ? "اشتراك نتفليكس" : "Netflix Subscription",
      amount: 165, date: language === "ar" ? "1 مايو" : "May 1", emoji: "🎬"
    },
    {
      name: language === "ar" ? "فاتورة الكهرباء" : "Electricity Bill",
      amount: 350, date: language === "ar" ? "3 مايو" : "May 3", emoji: "⚡"
    },
    {
      name: language === "ar" ? "فاتورة الإنترنت" : "Internet Bill",
      amount: 280, date: language === "ar" ? "5 مايو" : "May 5", emoji: "📡"
    },
    {
      name: language === "ar" ? "فاتورة الموبايل" : "Phone Bill",
      amount: 200, date: language === "ar" ? "10 مايو" : "May 10", emoji: "📱"
    },
  ];

  const savingsGoals = [
    {
      id: 1,
      name: language === "ar" ? "سفرة صيف" : "Summer Vacation",
      target: 5000,
      current: 3200,
      deadline: language === "ar" ? "1 يوليو" : "Jul 1",
      emoji: "✈️",
    },
    {
      id: 2,
      name: language === "ar" ? "لابتوب جديد" : "New Laptop",
      target: 8000,
      current: 2400,
      deadline: language === "ar" ? "15 يونيو" : "Jun 15",
      emoji: "💻",
    },
  ];

  const commitments = [
    {
      id: 1,
      name: language === "ar" ? "إيجار الشقة" : "Apartment Rent",
      amount: 1500,
      dueDate: language === "ar" ? "5 مايو" : "May 5",
      paid: false,
      emoji: "🏠",
    },
    {
      id: 2,
      name: language === "ar" ? "قسط السيارة" : "Car Installment",
      amount: 800,
      dueDate: language === "ar" ? "10 مايو" : "May 10",
      paid: false,
      emoji: "🚗",
    },
    {
      id: 3,
      name: language === "ar" ? "دين لأحمد" : "Debt to Ahmed",
      amount: 500,
      dueDate: language === "ar" ? "15 مايو" : "May 15",
      paid: false,
      emoji: "🤝",
    },
  ];

  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const budgetPercentage = (totalSpent / totalBudget) * 100;

  const currentChallenge = {
    name: language === "ar" ? "أسبوع بدون قهوة" : "No Coffee Week",
    emoji: "☕",
    progress: 4,
    target: 7,
    reward: 50,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`} />
          </Link>
          <h1 className="text-2xl text-gray-900">
            {language === "ar" ? "التخطيط والميزانية" : "Planning & Budget"}
          </h1>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <PersonalizedDashboard />


        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-2xl p-5 shadow-lg">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white mb-1">
                {language === "ar" ? "اقتراح AI للميزانية" : "AI Budget Suggestion"}
              </p>
              <p className="text-sm text-[#E8F3EF]">
                {language === "ar"
                  ? "بناءً على نمط صرفك، زود ميزانية الأكل بـ 200 دولار وقلل الترفيه بـ 100 دولار عشان توازن أفضل."
                  : "Based on your spending pattern, increase your Food budget by 200 USD and decrease Entertainment by 100 USD for better balance."}
              </p>
              <button className="mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm transition-colors">
                {language === "ar" ? "طبق الاقتراح" : "Apply Suggestion"}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#0F3D2E]" />
              <h2 className="text-lg text-gray-900">
                {language === "ar" ? "أهداف التوفير" : "Savings Goals"}
              </h2>
            </div>
            <button className="w-8 h-8 bg-[#E8F3EF] rounded-lg flex items-center justify-center hover:bg-[#D4E7DF] transition-colors">
              <Plus className="w-5 h-5 text-[#0F3D2E]" />
            </button>
          </div>
          <div className="space-y-4">
            {savingsGoals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              const remaining = goal.target - goal.current;
              const daysPerMonth = 30;
              const dailySaving = Math.ceil(remaining / daysPerMonth);

              return (
                <div key={goal.id} className="bg-gradient-to-br from-[#E8F3EF] to-[#F0F7F4] rounded-xl p-4 border border-[#D4E7DF]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{goal.emoji}</span>
                      <div>
                        <p className="text-gray-900">{goal.name}</p>
                        <p className="text-xs text-gray-500">
                          {language === "ar" ? "موعد الهدف:" : "Target:"} {goal.deadline}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#0F3D2E] font-medium">{Math.round(progress)}%</p>
                  </div>
                  <div className="mb-2">
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0F3D2E] to-[#145A44] rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-600">
                      {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {language === "ar" ? "$" : "USD"}
                    </p>
                    <p className="text-[#145A44]">
                      {language === "ar" ? `${dailySaving} $/يوم` : `${dailySaving} USD/day`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {savingsGoals.some(goal => goal.current >= goal.target) && (
            <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <p className="text-green-700 text-sm mb-2">
                🎉 {language === "ar" ? "وصلت لهدفك! استخدم الفلوس في:" : "Goal achieved! Use the money for:"}
              </p>
              <div className="space-y-2">
                {commitments.filter(c => !c.paid).map(commitment => (
                  <button
                    key={commitment.id}
                    className="w-full bg-white rounded-lg p-3 flex items-center justify-between hover:bg-green-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span>{commitment.emoji}</span>
                      <span className="text-sm text-gray-900">{commitment.name}</span>
                    </div>
                    <span className="text-sm text-[#0F3D2E]">{commitment.amount} {language === "ar" ? "$" : "USD"}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0F3D2E]" />
              <h2 className="text-lg text-gray-900">
                {language === "ar" ? "الالتزامات" : "Commitments"}
              </h2>
            </div>
            <button className="w-8 h-8 bg-[#E8F3EF] rounded-lg flex items-center justify-center hover:bg-[#D4E7DF] transition-colors">
              <Plus className="w-5 h-5 text-[#0F3D2E]" />
            </button>
          </div>
          <div className="space-y-3">
            {commitments.map((commitment) => (
              <div
                key={commitment.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  commitment.paid
                    ? "bg-green-50 border-green-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                    {commitment.emoji}
                  </div>
                  <div>
                    <p className="text-gray-900">{commitment.name}</p>
                    <p className="text-sm text-gray-500">
                      {language === "ar" ? "موعد الدفع:" : "Due:"} {commitment.dueDate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 mb-1">{commitment.amount} {language === "ar" ? "$" : "USD"}</p>
                  {commitment.paid ? (
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {language === "ar" ? "مدفوع" : "Paid"}
                    </span>
                  ) : (
                    <span className="text-xs text-orange-600">
                      {language === "ar" ? "معلق" : "Pending"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#0F3D2E]" />
            <h2 className="text-lg text-gray-900">
              {language === "ar" ? "الفواتير القادمة" : "Upcoming Bills"}
            </h2>
          </div>
          <div className="space-y-3">
            {upcomingBills.map((bill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                    {bill.emoji}
                  </div>
                  <div>
                    <p className="text-gray-900">{bill.name}</p>
                    <p className="text-sm text-gray-500">{bill.date}</p>
                  </div>
                </div>
                <p className="text-gray-900">{bill.amount} {language === "ar" ? "$" : "USD"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
