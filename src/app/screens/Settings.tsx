import { useState } from "react";
import {
  ArrowLeft,
  User,
  Globe,
  DollarSign,
  Cloud,
  Users,
  RefreshCw,
  Bell,
  Lock,
  HelpCircle,
  Mail,
  LogOut,
  ChevronRight,
  Check,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { AIInsightDemo } from "../components/AIInsightDemo";

export function Settings() {
  const { language, setLanguage: setAppLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [mode, setMode] = useState("Adult");

  const handleLanguageChange = (lang: "en" | "ar") => {
    setAppLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl text-gray-900">Settings</h1>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0F3D2E] to-[#145A44] rounded-full flex items-center justify-center text-white text-2xl">
              👤
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-900">
                {language === "ar" ? "أحمد حسن" : "Ahmed Hassan"}
              </p>
              <p className="text-sm text-gray-600">ahmed.hassan@email.com</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl text-gray-900 mb-1">42</p>
              <p className="text-xs text-gray-600">
                {language === "ar" ? "معاملة" : "Transactions"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-900 mb-1">12</p>
              <p className="text-xs text-gray-600">
                {language === "ar" ? "يوم نشط" : "Days Active"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-900 mb-1">4.2K</p>
              <p className="text-xs text-gray-600">
                {language === "ar" ? "إجمالي المتتبع" : "Total Tracked"}
              </p>
            </div>
          </div>
        </div>

        <AIInsightDemo />

        <div>
          <h2 className="text-sm text-gray-600 mb-3 px-2">
            {language === "ar" ? "التفضيلات" : "PREFERENCES"}
          </h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "اللغة" : "Language"}
                </p>
                <p className="text-sm text-gray-600">
                  {language === "ar" ? "العربية المصرية" : "English"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-gray-50 border-b border-gray-100"
                >
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="w-full px-5 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇬🇧</span>
                      <span className="text-gray-900">English</span>
                    </div>
                    {language === "en" && <Check className="w-5 h-5 text-[#0F3D2E]" />}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ar")}
                    className="w-full px-5 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇪🇬</span>
                      <span className="text-gray-900">العربية المصرية</span>
                    </div>
                    {language === "ar" && <Check className="w-5 h-5 text-[#0F3D2E]" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "العملة" : "Currency"}
                </p>
                <p className="text-sm text-gray-600">
                  {currency} - {language === "ar" ? "الدولار المصري" : "Egyptian Pound"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-600 mb-3 px-2">
            {language === "ar" ? "الحساب" : "ACCOUNT"}
          </h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 bg-[#E8F3EF] rounded-xl flex items-center justify-center">
                <Cloud className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "النسخ الاحتياطي السحابي" : "Cloud Backup"}
                </p>
                <p className="text-sm text-green-600">
                  {language === "ar" ? "آخر مزامنة منذ دقيقتين" : "Last synced 2 minutes ago"}
                </p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </button>

            <Link
              to="/family"
              className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "الخطة العائلية" : "Family Plan"}
                </p>
                <p className="text-sm text-gray-600">
                  {language === "ar" ? "4 أعضاء" : "4 members"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "الإشعارات" : "Notifications"}
                </p>
                <p className="text-sm text-gray-600">
                  {language === "ar" ? "مفعّلة" : "Enabled"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-600 mb-3 px-2">
            {language === "ar" ? "الوضع" : "MODE"}
          </h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <Link
              to="/"
              className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="w-10 h-10 bg-[#E8F3EF] rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "وضع البالغين" : "Adult Mode"}
                </p>
                <p className="text-sm text-gray-600">
                  {language === "ar" ? "جميع الميزات مفعلة" : "Full features enabled"}
                </p>
              </div>
              {mode === "Adult" && (
                <div className="w-2 h-2 bg-[#0F3D2E] rounded-full" />
              )}
            </Link>

            <Link
              to="/youth"
              className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl">
                🎮
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "وضع الشباب" : "Youth Mode"}
                </p>
                <p className="text-sm text-gray-600">
                  {language === "ar" ? "تجربة تفاعلية" : "Gamified experience"}
                </p>
              </div>
              {mode === "Youth" && (
                <div className="w-2 h-2 bg-yellow-600 rounded-full" />
              )}
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-gray-600 mb-3 px-2">
            {language === "ar" ? "الدعم" : "SUPPORT"}
          </h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-cyan-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "مركز المساعدة" : "Help Center"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "تواصل مع الدعم" : "Contact Support"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">
                  {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <button className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center justify-center gap-3 text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>{language === "ar" ? "تسجيل الخروج" : "Log Out"}</span>
        </button>

        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            {language === "ar" ? "لادو نسخة 1.0.0" : "LaDu v1.0.0"}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {language === "ar" ? "صُنع بحب ❤️ للموفرين الأذكياء" : "Made with ❤️ for smart savers"}
          </p>
        </div>
      </div>
    </div>
  );
}
