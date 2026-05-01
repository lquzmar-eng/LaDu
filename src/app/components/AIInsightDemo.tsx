import { useState } from "react";
import { AIInsight, InsightType } from "./AIInsight";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function AIInsightDemo() {
  const [showDemo, setShowDemo] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const { language } = useLanguage();

  const scenarios = [
    {
      type: "dangerous_location" as InsightType,
      context: { place: language === "ar" ? "المطعم الصيني" : "The Chinese Restaurant", amount: 250 },
    },
    {
      type: "expensive_friend" as InsightType,
      context: { friend: language === "ar" ? "أحمد" : "Ahmed", budgetRemaining: 800 },
    },
    {
      type: "mall_alert" as InsightType,
      context: { amount: 450 },
    },
    {
      type: "survival_mode" as InsightType,
      context: { daysLeft: 5, budgetRemaining: 300, dailyAmount: 60 },
    },
    {
      type: "upcoming_occasion" as InsightType,
      context: { person: language === "ar" ? "فاطمة" : "Fatima", amount: 200 },
    },
    {
      type: "unusual_spike" as InsightType,
      context: { amount: 180, category: language === "ar" ? "الطعام" : "Food", usual: 80 },
    },
    {
      type: "positive_reinforcement" as InsightType,
      context: { saved: 150, percentage: 15 },
    },
    {
      type: "payday" as InsightType,
      context: { income: 5000, lastMonthSpent: 1200 },
    },
  ];

  const handleNextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#0F3D2E]" />
          <h3 className="text-gray-900">
            {language === "ar" ? "تجربة رسائل AI" : "Test AI Messages"}
          </h3>
        </div>
        <button
          onClick={() => setShowDemo(!showDemo)}
          className="px-4 py-2 bg-[#E8F3EF] text-[#0F3D2E] rounded-lg hover:bg-[#D4E7DF] transition-colors text-sm"
        >
          {showDemo
            ? language === "ar"
              ? "إخفاء"
              : "Hide"
            : language === "ar"
            ? "عرض"
            : "Show"}
        </button>
      </div>

      {showDemo && (
        <>
          <p className="text-sm text-gray-600 mb-4">
            {language === "ar"
              ? "اضغط على الزر لرؤية سيناريوهات مختلفة من رسائل AI الذكية"
              : "Click the button to cycle through different AI insight scenarios"}
          </p>

          <div className="space-y-3">
            <button
              onClick={handleNextScenario}
              className="w-full bg-gradient-to-r from-[#0F3D2E] to-[#145A44] text-white py-3 rounded-xl hover:from-[#145A44] hover:to-[#1A6B54] transition-colors"
            >
              {language === "ar" ? "السيناريو التالي" : "Next Scenario"} ({currentScenario + 1}/
              {scenarios.length})
            </button>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-2">
                {language === "ar" ? "السيناريو الحالي:" : "Current Scenario:"}
              </p>
              <p className="text-sm text-gray-700">
                {scenarios[currentScenario].type.replace(/_/g, " ").toUpperCase()}
              </p>
            </div>
          </div>

          <AIInsight
            insight={scenarios[currentScenario]}
            onDismiss={() => setShowDemo(false)}
          />
        </>
      )}
    </div>
  );
}
