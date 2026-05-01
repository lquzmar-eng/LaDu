import { useState } from "react";
import { ArrowLeft, Plus, Users, X, TrendingDown, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

export function Family() {
  const { language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const familyMembers = [
    {
      id: 1,
      name: "Ahmed",
      role: "Parent",
      avatar: "👨",
      spent: 1850,
      transactions: 24,
      color: "#4F46E5",
    },
    {
      id: 2,
      name: "Fatima",
      role: "Parent",
      avatar: "👩",
      spent: 1200,
      transactions: 18,
      color: "#EC4899",
    },
    {
      id: 3,
      name: "Omar",
      role: "Teen",
      avatar: "👦",
      spent: 450,
      transactions: 12,
      color: "#10B981",
    },
    {
      id: 4,
      name: "Layla",
      role: "Child",
      avatar: "👧",
      spent: 180,
      transactions: 8,
      color: "#F59E0B",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      member: "Fatima",
      avatar: "👩",
      action: "logged expense",
      item: "Grocery Shopping",
      amount: -450,
      time: "2h ago",
    },
    {
      id: 2,
      member: "Omar",
      avatar: "👦",
      action: "spent allowance",
      item: "Video Game",
      amount: -120,
      time: "5h ago",
    },
    {
      id: 3,
      member: "Ahmed",
      avatar: "👨",
      action: "added income",
      item: "Salary",
      amount: 5000,
      time: "1d ago",
    },
    {
      id: 4,
      member: "Layla",
      avatar: "👧",
      action: "saved money",
      item: "Piggy Bank",
      amount: 25,
      time: "1d ago",
    },
  ];

  const totalSpent = familyMembers.reduce((sum, m) => sum + m.spent, 0);
  const totalTransactions = familyMembers.reduce((sum, m) => sum + m.transactions, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl text-gray-900">Family Mode</h1>
        </div>

        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-2xl p-5 shadow-lg">
          <p className="text-[#E8F3EF] text-sm mb-2">Shared Balance</p>
          <p className="text-white text-3xl mb-3">
            12,340 <span className="text-xl">EGP</span>
          </p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4E7DF]" />
              <span className="text-[#E8F3EF]">{familyMembers.length} members</span>
            </div>
            <div className="text-[#E8F3EF]">•</div>
            <span className="text-[#E8F3EF]">{totalTransactions} transactions</span>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Family Members</h2>
            <button className="flex items-center gap-1 text-[#0F3D2E] text-sm">
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {familyMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member.id)}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3"
                    style={{ backgroundColor: `${member.color}20` }}
                  >
                    {member.avatar}
                  </div>
                  <p className="text-gray-900 mb-1">{member.name}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.role}</p>
                  <div className="w-full pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">This month</p>
                    <p className="text-lg" style={{ color: member.color }}>
                      {member.spent} USD
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {member.transactions} transactions
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-1">Group Expenses</h3>
          <p className="text-3xl text-gray-900 mb-4">
            {totalSpent.toLocaleString()} <span className="text-lg text-gray-500">EGP</span>
          </p>
          <div className="space-y-2">
            {familyMembers.map((member) => {
              const percentage = (member.spent / totalSpent) * 100;
              return (
                <div key={member.id}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span>{member.avatar}</span>
                      <span className="text-sm text-gray-600">{member.name}</span>
                    </div>
                    <span className="text-sm text-gray-900">{Math.round(percentage)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: member.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-lg text-gray-900 mb-4">Activity Feed</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span>{activity.member}</span>{" "}
                      <span className="text-gray-500">{activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-600">{activity.item}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className={`${
                        activity.amount > 0 ? "text-green-600" : "text-gray-900"
                      }`}
                    >
                      {activity.amount > 0 ? "+" : ""}
                      {activity.amount} USD
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (() => {
          const member = familyMembers.find((m) => m.id === selectedMember);
          if (!member) return null;

          const memberWeeklyData = [
            { day: language === "ar" ? "الاثنين" : "Mon", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "الثلاثاء" : "Tue", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "الأربعاء" : "Wed", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "الخميس" : "Thu", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "الجمعة" : "Fri", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "السبت" : "Sat", amount: Math.random() * 100 + 20 },
            { day: language === "ar" ? "الأحد" : "Sun", amount: Math.random() * 100 + 20 },
          ];

          const memberTransactions = recentActivity.filter((a) => a.member === member.name);
          const avgDaily = Math.round(member.spent / 30);
          const budget = member.spent * 1.2;
          const budgetPercentage = (member.spent / budget) * 100;

          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="fixed inset-0 bg-black/30 z-40"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${member.color}20` }}
                    >
                      {member.avatar}
                    </div>
                    <div>
                      <h2 className="text-xl text-gray-900">{member.name}</h2>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="px-6 py-6 space-y-6">
                  {/* Stats Overview */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-600 mb-1">
                        {language === "ar" ? "هذا الشهر" : "This Month"}
                      </p>
                      <p className="text-lg" style={{ color: member.color }}>
                        {member.spent}
                      </p>
                      <p className="text-xs text-gray-500">{language === "ar" ? "$" : "USD"}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-600 mb-1">
                        {language === "ar" ? "المعاملات" : "Transactions"}
                      </p>
                      <p className="text-lg text-gray-900">{member.transactions}</p>
                      <p className="text-xs text-gray-500">{language === "ar" ? "معاملة" : "txns"}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-600 mb-1">
                        {language === "ar" ? "يومياً" : "Daily Avg"}
                      </p>
                      <p className="text-lg text-gray-900">{avgDaily}</p>
                      <p className="text-xs text-gray-500">{language === "ar" ? "$" : "USD"}</p>
                    </div>
                  </div>

                  {/* Budget Progress */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-gray-900">
                        {language === "ar" ? "الميزانية الشهرية" : "Monthly Budget"}
                      </h3>
                      <button className="text-[#0F3D2E] text-sm flex items-center gap-1">
                        <Settings className="w-4 h-4" />
                        {language === "ar" ? "تعديل" : "Edit"}
                      </button>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-end justify-between mb-2">
                        <p className="text-2xl text-gray-900">
                          {member.spent} <span className="text-sm text-gray-500">/ {budget.toFixed(0)} {language === "ar" ? "$" : "USD"}</span>
                        </p>
                        <p className="text-sm text-gray-600">{budgetPercentage.toFixed(0)}%</p>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(budgetPercentage, 100)}%`,
                            backgroundColor: budgetPercentage > 90 ? "#EF4444" : budgetPercentage > 70 ? "#F59E0B" : member.color,
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">
                      {language === "ar"
                        ? `متبقي ${(budget - member.spent).toFixed(0)} $`
                        : `${(budget - member.spent).toFixed(0)} USD remaining`}
                    </p>
                  </div>

                  {/* Weekly Spending Chart */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-gray-600" />
                      <h3 className="text-gray-900">
                        {language === "ar" ? "الصرف الأسبوعي" : "Weekly Spending"}
                      </h3>
                    </div>
                    <ResponsiveContainer width="100%" height={150}>
                      <BarChart data={memberWeeklyData}>
                        <XAxis
                          dataKey="day"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#9CA3AF", fontSize: 10 }}
                        />
                        <YAxis hide />
                        <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                          {memberWeeklyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={member.color} opacity={0.8} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Comparison with Family */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-gray-900 mb-4">
                      {language === "ar" ? "المقارنة مع العائلة" : "Family Comparison"}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          {language === "ar" ? "حصة من الإجمالي" : "Share of Total"}
                        </p>
                        <p className="text-gray-900">
                          {((member.spent / totalSpent) * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          {language === "ar" ? "الترتيب" : "Rank"}
                        </p>
                        <p className="text-gray-900">
                          #{familyMembers
                            .sort((a, b) => b.spent - a.spent)
                            .findIndex((m) => m.id === member.id) + 1}{" "}
                          {language === "ar" ? "من" : "of"} {familyMembers.length}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div>
                    <h3 className="text-gray-900 mb-3">
                      {language === "ar" ? "آخر المعاملات" : "Recent Transactions"}
                    </h3>
                    {memberTransactions.length > 0 ? (
                      <div className="space-y-2">
                        {memberTransactions.map((transaction) => (
                          <div
                            key={transaction.id}
                            className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between"
                          >
                            <div>
                              <p className="text-gray-900 text-sm">{transaction.item}</p>
                              <p className="text-xs text-gray-500">{transaction.time}</p>
                            </div>
                            <p
                              className={`${
                                transaction.amount > 0 ? "text-green-600" : "text-gray-900"
                              }`}
                            >
                              {transaction.amount > 0 ? "+" : ""}
                              {transaction.amount} {language === "ar" ? "$" : "USD"}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-xl p-8 text-center">
                        <p className="text-gray-500 text-sm">
                          {language === "ar" ? "لا توجد معاملات حديثة" : "No recent transactions"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* AI Insight */}
                  <div className="bg-[#E8F3EF] border border-[#D4E7DF] rounded-2xl p-5">
                    <p className="text-[#0F3D2E] mb-1">
                      {language === "ar" ? "💡 رؤية AI" : "💡 AI Insight"}
                    </p>
                    <p className="text-sm text-[#145A44]">
                      {language === "ar"
                        ? `${member.name} بيصرف أقل من المتوسط بـ 15% - استمر كده! 🎯`
                        : `${member.name} is spending 15% below average - keep it up! 🎯`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
