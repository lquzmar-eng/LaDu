import { useState } from "react";
import { useNavigate } from "react-router";
import { DollarSign } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Onboarding3() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [income, setIncome] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleComplete = () => {
    navigate("/");
  };

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        <div className="w-20 h-20 bg-[#E8F3EF] rounded-2xl flex items-center justify-center mb-8">
          <DollarSign className="w-10 h-10 text-[#0F3D2E]" />
        </div>

        <h2 className="text-3xl mb-2 text-gray-900 text-center">
          {language === "ar" ? "إعداد سريع" : "Quick Setup"}
        </h2>
        <p className="text-base text-gray-600 mb-8 text-center">
          {language === "ar" ? "ساعدنا نخصص التجربة ليك" : "Help us personalize your experience"}
        </p>

        <div className="w-full space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              {language === "ar" ? "الدخل الشهري (اختياري)" : "Monthly Income (Optional)"}
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="5000"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              {language === "ar" ? "العملة" : "Currency"}
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] bg-white"
            >
              <option value="USD">
                {language === "ar" ? "$ - الدولار المصري" : "EGP - Egyptian Pound"}
              </option>
              <option value="USD">
                {language === "ar" ? "$ - الدولار الأمريكي" : "USD - US Dollar"}
              </option>
              <option value="EUR">
                {language === "ar" ? "€ - اليورو" : "EUR - Euro"}
              </option>
              <option value="SAR">
                {language === "ar" ? "ر.س - الريال السعودي" : "SAR - Saudi Riyal"}
              </option>
              <option value="AED">
                {language === "ar" ? "د.إ - الدرهم الإماراتي" : "AED - UAE Dirham"}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm">
        <button
          onClick={handleComplete}
          className="w-full bg-[#0F3D2E] text-white py-4 rounded-2xl hover:bg-[#145A44] transition-colors shadow-sm"
        >
          {language === "ar" ? "ابدأ استخدام لادو" : "Start Using LaDu"}
        </button>
      </div>
    </div>
  );
}
