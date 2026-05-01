import { Link } from "react-router";
import { Mic, Volume2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Onboarding2() {
  const { language } = useLanguage();
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="relative mb-12">
          <div className="w-48 h-48 bg-[#E8F3EF] rounded-full flex items-center justify-center">
            <Mic className="w-20 h-20 text-[#0F3D2E]" />
          </div>
          <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-[#0F3D2E] rounded-full flex items-center justify-center">
            <Volume2 className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl mb-4 text-gray-900">
          {language === "ar" ? "نحتا$ للوصول للميكروفون" : "We need voice access"}
        </h2>
        <p className="text-base text-gray-600 max-w-sm">
          {language === "ar"
            ? "عشان تسجل مصروفاتك بصوتك، لادو محتا$ إذن للوصول للميكروفون. بياناتك الصوتية آمنة تماماً."
            : "To track your expenses by voice, LaDu needs permission to access your microphone. Your voice data is processed securely."}
        </p>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <Link
          to="/onboarding/3"
          className="block w-full bg-[#0F3D2E] text-white py-4 rounded-2xl text-center hover:bg-[#145A44] transition-colors shadow-sm"
        >
          {language === "ar" ? "تفعيل الميكروفون" : "Enable Microphone"}
        </Link>
        <Link
          to="/onboarding/3"
          className="block w-full text-gray-600 py-4 rounded-2xl text-center hover:bg-gray-50 transition-colors"
        >
          {language === "ar" ? "تخطي الآن" : "Skip for now"}
        </Link>
      </div>
    </div>
  );
}
