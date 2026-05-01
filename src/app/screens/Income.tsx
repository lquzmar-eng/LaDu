import { useState } from "react";
import { ArrowLeft, Plus, TrendingUp, Calendar, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Income() {
  const { language } = useLanguage();
  const [showAddModal, setShowAddModal] = useState(false);

  const incomeEntries = [
    {
      id: 1,
      source: language === "ar" ? "الراتب الشهري" : "Monthly Salary",
      amount: 5000,
      frequency: language === "ar" ? "شهري" : "Monthly",
      date: language === "ar" ? "1 مايو" : "May 1",
      emoji: "💼",
    },
    {
      id: 2,
      source: language === "ar" ? "فريلانس - تصميم موقع" : "Freelance - Website Design",
      amount: 2500,
      frequency: language === "ar" ? "مرة واحدة" : "One-time",
      date: language === "ar" ? "28 أبريل" : "Apr 28",
      emoji: "💻",
    },
    {
      id: 3,
      source: language === "ar" ? "بيع منتجات" : "Product Sales",
      amount: 800,
      frequency: language === "ar" ? "أسبوعي" : "Weekly",
      date: language === "ar" ? "25 أبريل" : "Apr 25",
      emoji: "🛍️",
    },
  ];

  const totalIncome = incomeEntries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`} />
          </Link>
          <h1 className="text-2xl text-gray-900">
            {language === "ar" ? "إدارة الدخل" : "Income Management"}
          </h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-[#E8F3EF]">
              {language === "ar" ? "إجمالي الدخل الشهري" : "Total Monthly Income"}
            </p>
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <p className="text-white text-4xl mb-2">
            {totalIncome.toLocaleString()}{" "}
            <span className="text-xl">{language === "ar" ? "$" : "USD"}</span>
          </p>
          <p className="text-sm text-[#D4E7DF]">
            {language === "ar"
              ? `من ${incomeEntries.length} مصادر دخل`
              : `From ${incomeEntries.length} income sources`}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg text-gray-900">
            {language === "ar" ? "مصادر الدخل" : "Income Sources"}
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-[#0F3D2E] text-white px-4 py-2 rounded-xl hover:bg-[#145A44] transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>{language === "ar" ? "إضافة" : "Add"}</span>
          </button>
        </div>

        <div className="space-y-3">
          {incomeEntries.map((entry) => (
            <motion.div
              key={entry.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-5 shadow-sm group relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {entry.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 truncate mb-1">{entry.source}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <p className="text-xs text-gray-500">{entry.frequency}</p>
                    <span className="text-gray-300">•</span>
                    <p className="text-xs text-gray-500">{entry.date}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-green-600 text-lg">
                    +{entry.amount} {language === "ar" ? "$" : "USD"}
                  </p>
                </div>
              </div>

              <div className={`absolute ${language === "ar" ? "left-0" : "right-0"} top-0 bottom-0 flex items-center gap-2 ${language === "ar" ? "pl-4" : "pr-4"} bg-white ${language === "ar" ? "-translate-x-full" : "translate-x-full"} group-hover:translate-x-0 transition-transform`}>
                <button className="w-10 h-10 bg-[#E8F3EF] rounded-lg flex items-center justify-center text-[#0F3D2E] hover:bg-[#F0F7F4]">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-100">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#E8F3EF] rounded-2xl p-5 border-2 border-[#D4E7DF]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#0F3D2E] rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#0F3D2E] mb-1">
                {language === "ar" ? "نصيحة AI" : "AI Insight"}
              </p>
              <p className="text-sm text-[#145A44]">
                {language === "ar"
                  ? "دخلك الشهر ده أعلى من المعتاد بـ 15%، فرصة حلوة توفر $زء منه!"
                  : "Your income this month is 15% higher than usual, great opportunity to save some!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
