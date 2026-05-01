import { Link } from "react-router";
import { Mic } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Onboarding1() {
  const { language } = useLanguage();
  return (
    <div className="h-screen bg-gradient-to-b from-[#F7F7F5] to-white flex flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[#0F3D2E] rounded-3xl flex items-center justify-center mb-8 shadow-lg">
          <Mic className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-4xl mb-4 text-gray-900">
          {language === "ar" ? "لادو" : "LaDu"}
        </h1>
        <p className="text-lg text-gray-600 max-w-sm">
          {language === "ar"
            ? "متتبع المصروفات الذكي بالصوت اللي بيفهمك"
            : "Your voice-first AI expense tracker that understands you"}
        </p>
      </div>

      <div className="w-full max-w-sm">
        <Link
          to="/onboarding/user-type"
          className="block w-full bg-[#0F3D2E] text-white py-4 rounded-2xl text-center hover:bg-[#145A44] transition-colors shadow-sm"
        >
          {language === "ar" ? "ابدأ الآن" : "Get Started"}
        </Link>
        <p className="text-center text-sm text-gray-500 mt-4">
          {language === "ar"
            ? "سجل مصروفاتك في ثواني بصوتك"
            : "Track expenses in seconds with your voice"}
        </p>
      </div>
    </div>
  );
}
