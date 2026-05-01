import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Calendar, X } from "lucide-react";
import { Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface MonthData {
  month: string;
  monthAr: string;
  year: number;
  amount: number;
  weeklyData: Array<{ day: string; amount: number }>;
  categoryData: Array<{ name: string; amount: number; percentage: number; emoji: string }>;
}

export function Statistics() {
  const { language } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(language === "ar" ? "أبريل 2026" : "April 2026");
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(3); // April = 3
  const [showArchive, setShowArchive] = useState(false);

  const weeklyData = [
    { day: language === "ar" ? "الاثنين" : "Mon", amount: 120 },
    { day: language === "ar" ? "الثلاثاء" : "Tue", amount: 85 },
    { day: language === "ar" ? "الأربعاء" : "Wed", amount: 95 },
    { day: language === "ar" ? "الخميس" : "Thu", amount: 340 },
    { day: language === "ar" ? "الجمعة" : "Fri", amount: 150 },
    { day: language === "ar" ? "السبت" : "Sat", amount: 200 },
    { day: language === "ar" ? "الأحد" : "Sun", amount: 110 },
  ];

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

  const categoryData = [
    {
      name: language === "ar" ? "الطعام والمطاعم" : "Food & Dining",
      amount: 850,
      percentage: 42,
      emoji: "🍔"
    },
    {
      name: language === "ar" ? "المواصلات" : "Transport",
      amount: 420,
      percentage: 21,
      emoji: "🚗"
    },
    {
      name: language === "ar" ? "الترفيه" : "Entertainment",
      amount: 380,
      percentage: 19,
      emoji: "🎬"
    },
    {
      name: language === "ar" ? "الفواتير" : "Bills",
      amount: 250,
      percentage: 12,
      emoji: "📱"
    },
    {
      name: language === "ar" ? "التسوق" : "Shopping",
      amount: 120,
      percentage: 6,
      emoji: "🛍️"
    },
  ];

  // Historical data for archive
  const monthsData: MonthData[] = [
    // 2024
    { month: "January", monthAr: "يناير", year: 2024, amount: 1850, weeklyData: [], categoryData: [] },
    { month: "February", monthAr: "فبراير", year: 2024, amount: 2100, weeklyData: [], categoryData: [] },
    { month: "March", monthAr: "مارس", year: 2024, amount: 1950, weeklyData: [], categoryData: [] },
    { month: "April", monthAr: "أبريل", year: 2024, amount: 2300, weeklyData: [], categoryData: [] },
    { month: "May", monthAr: "مايو", year: 2024, amount: 2750, weeklyData: [], categoryData: [] },
    { month: "June", monthAr: "يونيو", year: 2024, amount: 2200, weeklyData: [], categoryData: [] },
    { month: "July", monthAr: "يوليو", year: 2024, amount: 3100, weeklyData: [], categoryData: [] },
    { month: "August", monthAr: "أغسطس", year: 2024, amount: 2650, weeklyData: [], categoryData: [] },
    { month: "September", monthAr: "سبتمبر", year: 2024, amount: 2400, weeklyData: [], categoryData: [] },
    { month: "October", monthAr: "أكتوبر", year: 2024, amount: 2850, weeklyData: [], categoryData: [] },
    { month: "November", monthAr: "نوفمبر", year: 2024, amount: 2550, weeklyData: [], categoryData: [] },
    { month: "December", monthAr: "ديسمبر", year: 2024, amount: 3400, weeklyData: [], categoryData: [] },
    // 2025
    { month: "January", monthAr: "يناير", year: 2025, amount: 2200, weeklyData: [], categoryData: [] },
    { month: "February", monthAr: "فبراير", year: 2025, amount: 2350, weeklyData: [], categoryData: [] },
    { month: "March", monthAr: "مارس", year: 2025, amount: 2150, weeklyData: [], categoryData: [] },
    { month: "April", monthAr: "أبريل", year: 2025, amount: 2600, weeklyData: [], categoryData: [] },
    { month: "May", monthAr: "مايو", year: 2025, amount: 2900, weeklyData: [], categoryData: [] },
    { month: "June", monthAr: "يونيو", year: 2025, amount: 2400, weeklyData: [], categoryData: [] },
    { month: "July", monthAr: "يوليو", year: 2025, amount: 3200, weeklyData: [], categoryData: [] },
    { month: "August", monthAr: "أغسطس", year: 2025, amount: 2750, weeklyData: [], categoryData: [] },
    { month: "September", monthAr: "سبتمبر", year: 2025, amount: 2500, weeklyData: [], categoryData: [] },
    { month: "October", monthAr: "أكتوبر", year: 2025, amount: 2950, weeklyData: [], categoryData: [] },
    { month: "November", monthAr: "نوفمبر", year: 2025, amount: 2700, weeklyData: [], categoryData: [] },
    { month: "December", monthAr: "ديسمبر", year: 2025, amount: 3500, weeklyData: [], categoryData: [] },
    // 2026
    { month: "January", monthAr: "يناير", year: 2026, amount: 2300, weeklyData: [], categoryData: [] },
    { month: "February", monthAr: "فبراير", year: 2026, amount: 2450, weeklyData: [], categoryData: [] },
    { month: "March", monthAr: "مارس", year: 2026, amount: 2250, weeklyData: [], categoryData: [] },
    { month: "April", monthAr: "أبريل", year: 2026, amount: 2020, weeklyData: weeklyData, categoryData: categoryData },
  ];

  const getColorByAmount = (amount: number) => {
    if (amount < 2000) return "bg-green-100 border-green-300 text-green-900";
    if (amount < 2500) return "bg-yellow-100 border-yellow-300 text-yellow-900";
    if (amount < 3000) return "bg-orange-100 border-orange-300 text-orange-900";
    return "bg-red-100 border-red-300 text-red-900";
  };

  const handleMonthSelect = (monthIndex: number, year: number) => {
    setCurrentMonthIndex(monthIndex);
    setCurrentYear(year);
    const monthNames = language === "ar"
      ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
      : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    setCurrentMonth(`${monthNames[monthIndex]} ${year}`);
    setShowArchive(false);
  };

  const getCurrentMonthData = () => {
    return monthsData.find(
      (m) => m.year === currentYear &&
      (language === "ar" ? m.monthAr : m.month) === currentMonth.split(" ")[0]
    ) || monthsData[monthsData.length - 1];
  };

  const currentData = getCurrentMonthData();
  const maxAmount = Math.max(...weeklyData.map((d) => d.amount));
  const totalSpent = categoryData.reduce((sum, cat) => sum + cat.amount, 0);
  const lastMonth = 2450;
  const change = ((totalSpent - lastMonth) / lastMonth) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`} />
          </Link>
          <h1 className="text-2xl text-gray-900">
            {language === "ar" ? "الإحصائيات" : "Statistics"}
          </h1>
        </div>

        <button
          onClick={() => setShowArchive(true)}
          className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 w-full hover:bg-gray-100 transition-colors"
        >
          <Calendar className="w-5 h-5 text-gray-600" />
          <span className="text-gray-900">{currentMonth}</span>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Total Spending Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">
            {language === "ar" ? "إجمالي المصروفات" : "Total Spending"}
          </p>
          <div className="flex items-end justify-between mb-4">
            <p className="text-4xl text-gray-900">
              {totalSpent.toLocaleString()} <span className="text-xl text-gray-500">{language === "ar" ? "$" : "USD"}</span>
            </p>
            <div className={`flex items-center gap-1 ${change < 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change < 0 ? <TrendingDown className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
              <span>{Math.abs(change).toFixed(1)}%</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div>
              <p className="text-gray-500">{language === "ar" ? "هذا الشهر" : "This month"}</p>
              <p className="text-gray-900">{totalSpent} {language === "ar" ? "$" : "USD"}</p>
            </div>
            <div>
              <p className="text-gray-500">{language === "ar" ? "الشهر الماضي" : "Last month"}</p>
              <p className="text-gray-900">{lastMonth} {language === "ar" ? "$" : "USD"}</p>
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">
              {language === "ar" ? "هذا الأسبوع 📊" : "This Week 📊"}
            </h2>
            <div className="text-right">
              <p className="text-sm text-gray-500">{language === "ar" ? "إجمالي الأسبوع" : "Weekly Total"}</p>
              <p className="text-lg text-[#0F3D2E]">
                {weeklyData.reduce((sum, day) => sum + day.amount, 0)} {language === "ar" ? "$" : "USD"}
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={weeklyData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 13, fontWeight: 500 }}
              />
              <YAxis hide />
              <Bar dataKey="amount" radius={[12, 12, 0, 0]} maxBarSize={45}>
                {weeklyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.amount === maxAmount ? "#0F3D2E" : "#D4E7DF"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 bg-[#E8F3EF] rounded-xl p-3 flex items-center justify-center gap-2">
            <span className="text-2xl">🔥</span>
            <p className="text-sm text-[#0F3D2E]">
              {language === "ar"
                ? `أعلى صرف: الخميس (${maxAmount} $)`
                : `Peak day: Thursday (${maxAmount} USD)`}
            </p>
          </div>
        </div>

        {/* Category Budgets */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg text-gray-900 mb-4">
            {language === "ar" ? "ميزانيات الفئات" : "Category Budgets"}
          </h2>
          <div className="space-y-5">
            {budgets.map((budget) => {
              const percentage = (budget.spent / budget.budget) * 100;
              const isOverBudget = percentage > 100;
              const isWarning = percentage > 80 && percentage <= 100;

              return (
                <div key={budget.category}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{budget.emoji}</span>
                      <span className="text-gray-900">{budget.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900">
                        {budget.spent} <span className="text-gray-500">/ {budget.budget} {language === "ar" ? "$" : "USD"}</span>
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isOverBudget
                          ? "bg-red-500"
                          : isWarning
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  {isOverBudget && (
                    <p className="text-xs text-red-600 mt-1">
                      {language === "ar"
                        ? `تجاوز الميزانية بـ ${budget.spent - budget.budget} $`
                        : `Over budget by ${budget.spent - budget.budget} USD`}
                    </p>
                  )}
                  {isWarning && (
                    <p className="text-xs text-yellow-600 mt-1">
                      {language === "ar"
                        ? `متبقي ${budget.budget - budget.spent} $`
                        : `${budget.budget - budget.spent} USD remaining`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple Insight */}
        <div className="bg-[#E8F3EF] border border-[#D4E7DF] rounded-2xl p-5">
          <p className="text-[#0F3D2E] mb-1">
            {language === "ar" ? "💡 ملاحظة" : "💡 Insight"}
          </p>
          <p className="text-sm text-[#145A44]">
            {language === "ar"
              ? "أنت تصرف 3 أضعاف المعتاد في أيام الخميس. حاول التخطيط مسبقاً لتوفير حوالي 200 دولار أسبوعياً."
              : "You spend 3x more on Thursdays. Try planning ahead to save around 200 USD weekly."}
          </p>
        </div>
      </div>

      {/* Archive Modal */}
      <AnimatePresence>
        {showArchive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowArchive(false)}
              className="fixed inset-0 bg-black/30 z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl text-gray-900">
                  {language === "ar" ? "الأرشيف" : "Archive"}
                </h2>
                <button
                  onClick={() => setShowArchive(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-8">
                {[2026, 2025, 2024].map((year) => (
                  <div key={year}>
                    <h3 className="text-lg text-gray-900 mb-4">{year}</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {monthsData
                        .filter((m) => m.year === year)
                        .map((monthData, index) => {
                          const isSelected =
                            currentYear === year &&
                            currentMonth.includes(language === "ar" ? monthData.monthAr : monthData.month);

                          return (
                            <button
                              key={index}
                              onClick={() => handleMonthSelect(index, year)}
                              className={`
                                ${getColorByAmount(monthData.amount)}
                                ${isSelected ? "ring-2 ring-[#0F3D2E]" : ""}
                                border rounded-xl p-3 text-center hover:scale-105 transition-all
                              `}
                            >
                              <p className="text-xs mb-1">
                                {language === "ar" ? monthData.monthAr : monthData.month}
                              </p>
                              <p className="text-sm">
                                {monthData.amount.toLocaleString()}
                              </p>
                              <p className="text-xs opacity-60">
                                {language === "ar" ? "$" : "USD"}
                              </p>
                            </button>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                    <span>{language === "ar" ? "قليل" : "Low"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                    <span>{language === "ar" ? "متوسط" : "Medium"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
                    <span>{language === "ar" ? "عالي" : "High"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                    <span>{language === "ar" ? "عالي جداً" : "Very High"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
