import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, TrendingDown, TrendingUp, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface DailySummary {
  spent: number;
  saved: number;
  transactions: number;
  topCategory: string;
  emoji: string;
}

export function EndOfDayNotification() {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();

  const summary: DailySummary = {
    spent: 165,
    saved: 35,
    transactions: 4,
    topCategory: "Food",
    emoji: "🍕",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getMessage = () => {
    const messages = {
      en: [
        `yo you survived today with ${summary.saved} USD left — not bad not bad 😎`,
        `${summary.spent} USD spent today, mostly on ${summary.topCategory} ${summary.emoji} — living your best life i see lol`,
        `${summary.transactions} transactions today and you still got money left?? character development fr 🫡`,
        `day's done! you spent ${summary.spent} USD but stayed under budget — that's what we like to see 🎉`,
        `${summary.topCategory} again? bestie that's the 3rd day this week 😂 — but hey, at least you tracked it`,
      ],
      ar: [
        `يسطا عديت النهارده وفاضل معاك ${summary.saved} دولار — مش بطال يعني 😎`,
        `صرفت ${summary.spent} دولار النهارده، معظمهم على ${summary.topCategory} ${summary.emoji} — عايش حياتك على الآخر يعني 😂`,
        `${summary.transactions} مصاريف النهارده ولسه فاضل فلوس؟ ده تطور حقيقي والله 🫡`,
        `اليوم خلص! صرفت ${summary.spent} دولار بس قعدت تحت الميزانية — ده اللي عايزينه بقى 🎉`,
        `${summary.topCategory} تاني؟ يعم ده تالت يوم الأسبوع ده 😂 — بس على الأقل بتسجل`,
      ],
    };

    const randomIndex = Math.floor(Math.random() * messages[language].length);
    return messages[language][randomIndex];
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: language === "ar" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: language === "ar" ? -100 : 100 }}
        className="fixed bottom-24 right-4 left-4 md:left-auto md:w-96 z-50"
      >
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-2xl shadow-2xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#D4E7DF] mb-1">
                {language === "ar" ? "ملخص اليوم 🌙" : "End of Day Summary 🌙"}
              </p>
              <p className="text-white leading-relaxed text-sm">{getMessage()}</p>
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-white/60 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-red-300" />
                <p className="text-xs text-[#D4E7DF]">
                  {language === "ar" ? "صرفت" : "Spent"}
                </p>
              </div>
              <p className="text-white text-lg">{summary.spent} {language === "ar" ? "$" : "USD"}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <p className="text-xs text-[#D4E7DF]">
                  {language === "ar" ? "وفرت" : "Saved"}
                </p>
              </div>
              <p className="text-white text-lg">{summary.saved} {language === "ar" ? "$" : "USD"}</p>
            </div>
          </div>

          <button
            onClick={() => setShow(false)}
            className="w-full mt-3 bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl transition-colors text-sm"
          >
            {language === "ar" ? "تمام 👌" : "Got it 👌"}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
