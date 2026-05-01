import { Trophy, Flame, Star, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function Gamification() {
  const { language } = useLanguage();

  const userStats = {
    points: 450,
    streak: 7,
    level: 3,
    nextLevelPoints: 500,
  };

  const badges = [
    {
      id: 1,
      name: language === "ar" ? "أول توفير" : "First Save",
      emoji: "🏆",
      unlocked: true,
      date: language === "ar" ? "20 أبريل" : "Apr 20",
    },
    {
      id: 2,
      name: language === "ar" ? "أسبوع منضبط" : "Week Streak",
      emoji: "🔥",
      unlocked: true,
      date: language === "ar" ? "25 أبريل" : "Apr 25",
    },
    {
      id: 3,
      name: language === "ar" ? "100 $ موفرة" : "100 USD Saved",
      emoji: "💰",
      unlocked: true,
      date: language === "ar" ? "28 أبريل" : "Apr 28",
    },
    {
      id: 4,
      name: language === "ar" ? "سيد الميزانية" : "Budget Master",
      emoji: "🎯",
      unlocked: false,
    },
    {
      id: 5,
      name: language === "ar" ? "خبير المال" : "Money Expert",
      emoji: "🌟",
      unlocked: false,
    },
    {
      id: 6,
      name: language === "ar" ? "ملك التوفير" : "Savings King",
      emoji: "👑",
      unlocked: false,
    },
  ];

  const currentChallenge = {
    name: language === "ar" ? "أسبوع بدون قهوة" : "No Coffee Week",
    emoji: "☕",
    progress: 4,
    target: 7,
    reward: 50,
  };

  const progressToNextLevel = (userStats.points / userStats.nextLevelPoints) * 100;

  return (
    <div className="space-y-4">


    </div>
  );
}
