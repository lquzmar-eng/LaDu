import { useState } from "react";
import { Eye, EyeOff, TrendingUp, TrendingDown, ArrowUpRight, Plus } from "lucide-react";
import { VoiceButton } from "../components/VoiceButton";
import { EndOfDayNotification } from "../components/EndOfDayNotification";
import { AIQuickTip } from "../components/AIQuickTip";
import { Gamification } from "../components/Gamification";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { language } = useLanguage();
  const [showBalance, setShowBalance] = useState(true);

  const transactions = [
    {
      id: 1,
      emoji: "🍕",
      name: "Pizza Delivery",
      category: "Food",
      date: "Today, 2:30 PM",
      amount: -120,
    },
    {
      id: 2,
      emoji: "💰",
      name: "Freelance Payment",
      category: "Income",
      date: "Today, 10:00 AM",
      amount: 2500,
    },
    {
      id: 3,
      emoji: "☕",
      name: "Coffee Shop",
      category: "Food",
      date: "Yesterday",
      amount: -35,
    },
    {
      id: 4,
      emoji: "🚕",
      name: "Uber Ride",
      category: "Transport",
      date: "Yesterday",
      amount: -75,
    },
    {
      id: 5,
      emoji: "🎬",
      name: "Netflix Subscription",
      category: "Entertainment",
      date: "Apr 26",
      amount: -165,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-600">
              {language === "ar" ? "مساء الخير،" : "Good afternoon,"}
            </p>
            <h1 className="text-2xl text-gray-900 mt-1">
              {language === "ar" ? "أحمد" : "Ahmed"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-50 to-red-50 px-3 py-1.5 rounded-full">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-medium text-gray-900">7</span>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F3EF' }}>
              <span className="text-xl">👤</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #0F3D2E, #145A44)' }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm" style={{ color: '#E8F3EF' }}>
              {language === "ar" ? "الرصيد الإجمالي" : "Total Balance"}
            </p>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-white text-4xl mb-4">
            {showBalance ? "4,235.00" : "••••••"}{" "}
            <span className="text-xl">{language === "ar" ? "$" : "USD"}</span>
          </p>
          <div className="flex items-center gap-4">
            <Link to="/income" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-300" />
              </div>
              <div>
                <p className="text-xs" style={{ color: '#E8F3EF' }}>
                  {language === "ar" ? "الدخل" : "Income"}
                </p>
                <p className="text-white">2,500</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-red-300" />
              </div>
              <div>
                <p className="text-xs" style={{ color: '#E8F3EF' }}>
                  {language === "ar" ? "المصروفات" : "Expenses"}
                </p>
                <p className="text-white">395</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-4">
        <Gamification />

        <AIQuickTip variant="success" />

        <div className="flex items-center justify-between">
          <h2 className="text-lg text-gray-900">
            {language === "ar" ? "آخر المعاملات" : "Recent Transactions"}
          </h2>
          <Link to="/transactions" className="text-sm flex items-center gap-1" style={{ color: '#0F3D2E' }}>
            {language === "ar" ? "عرض الكل" : "See All"}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                {transaction.emoji}
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p
                  className={`${
                    transaction.amount > 0 ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount} USD
                </p>
                <p className="text-xs text-gray-500">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VoiceButton />
      <EndOfDayNotification />
    </div>
  );
}
