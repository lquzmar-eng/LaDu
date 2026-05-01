import { ArrowLeft, Star, Trophy, Target, Flame } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Youth() {
  const badges = [
    { id: 1, emoji: "🏆", name: "First Save", unlocked: true },
    { id: 2, emoji: "🎯", name: "Week Streak", unlocked: true },
    { id: 3, emoji: "💰", name: "100 USD Saved", unlocked: true },
    { id: 4, emoji: "🌟", name: "Budget Master", unlocked: false },
    { id: 5, emoji: "🚀", name: "Money Expert", unlocked: false },
    { id: 6, emoji: "👑", name: "Savings King", unlocked: false },
  ];

  const recentSavings = [
    { id: 1, emoji: "🍿", item: "Skipped Snacks", saved: 15, date: "Today" },
    { id: 2, emoji: "🎮", item: "Waited for Sale", saved: 50, date: "Yesterday" },
    { id: 3, emoji: "🚶", item: "Walked Instead", saved: 10, date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F3EF] to-blue-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl text-gray-900">Youth Mode</h1>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div className="bg-gradient-to-br from-[#0F3D2E] to-pink-500 rounded-3xl p-6 shadow-lg relative overflow-hidden">
          <motion.div
            className="absolute -right-4 -top-4 text-6xl opacity-20"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            💰
          </motion.div>

          <div className="relative z-10">
            <p className="text-[#E8F3EF] text-sm mb-2">Your Allowance</p>
            <p className="text-white text-4xl mb-4">
              12 <span className="text-2xl">EGP</span>
            </p>
            <div className="bg-white/20 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#E8F3EF] text-sm">Until Friday</span>
                <span className="text-white">12 / 100 USD</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-[12%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🎉
              </div>
              <div>
                <p className="text-gray-900">You saved again?!</p>
                <p className="text-sm text-gray-600">Money Legend!</p>
              </div>
            </div>
            <div className="text-3xl">🏆</div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-orange-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Savings Streak</p>
                <p className="text-2xl text-gray-900">12 Days!</p>
              </div>
              <div className="text-4xl">🔥</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#0F3D2E]" />
            <h2 className="text-lg text-gray-900">Weekly Challenge</h2>
          </div>

          <div className="bg-gradient-to-br from-[#E8F3EF] to-[#F0F7F4] rounded-2xl p-5 border-2 border-[#D4E7DF]">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🍿</div>
              <div className="flex-1">
                <p className="text-gray-900">Spend 10% less on snacks</p>
                <p className="text-sm text-gray-600">2 days left</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="text-[#0F3D2E]">7 / 10 USD saved</span>
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0F3D2E] to-[#145A44] rounded-full w-[70%]" />
              </div>
              <p className="text-xs text-gray-600">Just 3 USD more to win a badge!</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg text-gray-900">Your Badges</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: badge.unlocked ? 1.05 : 1 }}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-3 ${
                  badge.unlocked
                    ? "bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300"
                    : "bg-gray-100 border-2 border-gray-200"
                }`}
              >
                <div
                  className={`text-3xl mb-2 ${!badge.unlocked && "grayscale opacity-40"}`}
                >
                  {badge.emoji}
                </div>
                <p
                  className={`text-xs text-center ${
                    badge.unlocked ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {badge.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-green-600" />
            <h2 className="text-lg text-gray-900">Recent Savings</h2>
          </div>

          <div className="space-y-3">
            {recentSavings.map((saving) => (
              <div
                key={saving.id}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {saving.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{saving.item}</p>
                    <p className="text-sm text-gray-600">{saving.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-green-600">+{saving.saved} USD</p>
                    <p className="text-xs text-green-700">Saved!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-4xl">🎯</div>
            <div>
              <p className="text-sm text-orange-100">Your Goal</p>
              <p className="text-xl">New Video Game</p>
            </div>
          </div>

          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-100">Saved so far</span>
              <span className="text-white">245 / 500 USD</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-[49%]" />
            </div>
            <p className="text-sm text-orange-100 mt-2">Almost halfway there!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
