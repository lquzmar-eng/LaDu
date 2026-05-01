import { useLanguage } from "../contexts/LanguageContext";

interface AIQuickTipProps {
  variant?: "info" | "warning" | "success";
}

export function AIQuickTip({ variant = "info" }: AIQuickTipProps) {
  const { language } = useLanguage();

  const tips = {
    en: [
      { text: "yo heads up — thursdays are dangerous for you, you spend 3x more 😅", emoji: "👀" },
      { text: "bestie you've been crushing it this week, keep that energy going 🫡", emoji: "🔥" },
      { text: "that coffee addiction is costing you 120 USD/week lol just saying 👀", emoji: "☕" },
      { text: "fun fact: you never buy groceries on weekends, always weekdays. cheaper trick? 🤔", emoji: "🛒" },
      { text: "your wallet loves tuesdays — lowest spending day of your week fr", emoji: "💚" },
    ],
    ar: [
      { text: "يسطا انتبه — أيام الخميس خطر عليك، بتصرف 3 أضعاف 😅", emoji: "👀" },
      { text: "ماشي يا معلم الأسبوع ده، كمل بنفس الطاقة 🫡", emoji: "🔥" },
      { text: "إدمان القهوة بتاعك بيكلفك 120 دولار في الأسبوع يعم 👀", emoji: "☕" },
      { text: "معلومة: انت مش بتشتري خضار في الويكند أبداً، دايماً في الأسبوع. حركة ذكية؟ 🤔", emoji: "🛒" },
      { text: "جيبك بيحب أيام التلات — أقل يوم صرف عندك فعلاً", emoji: "💚" },
    ],
  };

  const randomTip = tips[language][Math.floor(Math.random() * tips[language].length)];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-gray-100">
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{randomTip.emoji}</div>
        <div className="flex-1">
          <p className="text-gray-900 leading-relaxed">
            {randomTip.text}
          </p>
        </div>
      </div>
    </div>
  );
}
