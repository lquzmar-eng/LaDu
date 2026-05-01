import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export type InsightType =
  | "dangerous_location"
  | "expensive_friend"
  | "mall_alert"
  | "survival_mode"
  | "upcoming_occasion"
  | "unusual_spike"
  | "positive_reinforcement"
  | "payday";

interface InsightData {
  type: InsightType;
  context: {
    place?: string;
    amount?: number;
    friend?: string;
    daysLeft?: number;
    budgetRemaining?: number;
    dailyAmount?: number;
    person?: string;
    category?: string;
    usual?: number;
    saved?: number;
    percentage?: number;
    income?: number;
    lastMonthSpent?: number;
  };
}

interface AIInsightProps {
  insight: InsightData | null;
  onDismiss: () => void;
}

export function AIInsight({ insight, onDismiss }: AIInsightProps) {
  const { language } = useLanguage();

  if (!insight) return null;

  const getMessage = (): { en: string; ar: string } => {
    const { type, context } = insight;

    switch (type) {
      case "dangerous_location":
        return {
          en: `${context.place}?? bestie you never leave there under ${context.amount} USD 😭 — what's your limit tonight before you walk in?`,
          ar: `${context.place} ده؟ 😂 يسطا انت عمرك ما خرجت منه بأقل من ${context.amount} دولار — قول لي هتصرف قد إيه الليلة الأول`,
        };

      case "expensive_friend":
        return {
          en: `${context.friend} again?? every time you hang with them your wallet cries 😅 — you've got ${context.budgetRemaining} USD left this week, how you splitting it?`,
          ar: `${context.friend} تاني؟ 😩 يعم كل ما تخرج معاه ترجع جيبك فاضي — فاضلك ${context.budgetRemaining} دولار الأسبوع ده، هتتصرف إزاي؟`,
        };

      case "mall_alert":
        return {
          en: `the mall? good luck lol 😬 — last 3 times you went in for one thing and came out ${context.amount} USD poorer. want to set a hard limit rn?`,
          ar: `المول؟ ربنا يسترك 😂 — آخر 3 مرات دخلت تشتري حاجة وطلعت بـ${context.amount} دولار زيادة. عايز تحدد سقف دلوقتي؟`,
        };

      case "survival_mode":
        return {
          en: `${context.daysLeft} days left, ${context.budgetRemaining} USD in the tank — that's ${context.dailyAmount} USD/day. not impossible but not comfortable either. want a survival plan? 😬`,
          ar: `فاضل ${context.daysLeft} أيام و${context.budgetRemaining} دولار بس — يعني ${context.dailyAmount} دولار في اليوم يسطا 😅 — عايز نعمل خطة توفير للأيام دي؟`,
        };

      case "upcoming_occasion":
        return {
          en: `${context.person}'s birthday tomorrow?? cute 🥹 — last time you spent ${context.amount} USD on a gift. want to set aside a budget now before you panic-buy something expensive?`,
          ar: `عيد ميلاد ${context.person} بكره؟ حلو ده 🥹 — المرة اللي فاتت صرفت ${context.amount} دولار على الهدية. مش أحسن نحجز مبلغ دلوقتي قبل ما تشتري أي حاجة في اللحظة الأخيرة؟`,
        };

      case "unusual_spike":
        return {
          en: `wait — ${context.amount} USD on ${context.category} in one shot?? that's double your usual 👀 — everything okay or do we need to talk about it lol`,
          ar: `لحظة — ${context.amount} دولار على ${context.category} في مرة وحدة؟ 😳 ده ضعف اللي بتصرفه عادةً — كل حاجة تمام ولا في كلام؟`,
        };

      case "positive_reinforcement":
        return {
          en: `you ended the week ${context.saved} USD under budget — that's not luck, that's discipline 🫡 same energy next week?`,
          ar: `خلصت الأسبوع وفاضل معاك ${context.saved} دولار — ده مش صدفة يسطا، ده انضباط حقيقي 🫡 — نكرر الأسبوع الجاي؟`,
        };

      case "payday":
        return {
          en: `payday let's gooo 🎉 — real talk though, last month you spent ${context.lastMonthSpent} USD in the first week alone. want to lock in your budget before the excitement wears off?`,
          ar: `المرتب نزل يسطا 🎉 — بس بينا وبينك، الشهر اللي فات صرفت ${context.lastMonthSpent} دولار في الأسبوع الأول بس. مش أحسن نقسم الميزانية دلوقتي وانت في أحسن حالاتك؟`,
        };

      default:
        return {
          en: "Hey! I noticed something interesting about your spending 👀",
          ar: "يسطا! لاحظت حاجة مثيرة في مصاريفك 👀",
        };
    }
  };

  const message = getMessage();
  const text = language === "ar" ? message.ar : message.en;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 left-4 right-4 z-50 flex justify-center"
      >
        <div className="bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-2xl shadow-2xl p-4 max-w-md w-full">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#E8F3EF] mb-1">
                {language === "ar" ? "AI يقولك" : "AI says"}
              </p>
              <p className="text-white leading-relaxed">{text}</p>
            </div>
            <button
              onClick={onDismiss}
              className="text-white/80 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
