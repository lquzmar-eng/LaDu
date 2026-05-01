import { useState } from "react";
import { Link } from "react-router";
import { GraduationCap, Briefcase, Code, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function OnboardingUserType() {
  const { language } = useLanguage();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const userTypes = [
    {
      id: "student",
      icon: GraduationCap,
      name: language === "ar" ? "طالب" : "Student",
      description: language === "ar" ? "مصروف يومي وميزانية محدودة" : "Daily allowance & limited budget",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "employee",
      icon: Briefcase,
      name: language === "ar" ? "موظف" : "Employee",
      description: language === "ar" ? "راتب شهري والتزامات ثابتة" : "Monthly salary & fixed commitments",
      color: "from-[#0F3D2E] to-[#145A44]",
    },
    {
      id: "freelancer",
      icon: Code,
      name: language === "ar" ? "فريلانسر" : "Freelancer",
      description: language === "ar" ? "دخل متغير ومشاريع متعددة" : "Variable income & multiple projects",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "other",
      icon: User,
      name: language === "ar" ? "آخر" : "Other",
      description: language === "ar" ? "استخدام عام" : "General use",
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F7F5] to-white p-8 flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-900 mb-3">
            {language === "ar" ? "أنت..." : "You are..."}
          </h1>
          <p className="text-gray-600">
            {language === "ar"
              ? "اختر نوع حسابك عشان نخصص التجربة ليك"
              : "Choose your profile to personalize your experience"}
          </p>
        </div>

        <div className="space-y-4 max-w-md mx-auto w-full">
          {userTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;

            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`w-full p-5 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? "border-[#0F3D2E] bg-[#E8F3EF] shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${type.color}`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-lg text-gray-900 mb-1">{type.name}</p>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? "border-[#0F3D2E] bg-[#0F3D2E]"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-md mx-auto space-y-3 mt-8">
        <Link
          to="/onboarding/2"
          className={`block w-full py-4 rounded-2xl text-center transition-colors shadow-sm ${
            selectedType
              ? "bg-[#0F3D2E] text-white hover:bg-[#145A44]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!selectedType) e.preventDefault();
            else {
              localStorage.setItem("userType", selectedType);
            }
          }}
        >
          {language === "ar" ? "التالي" : "Continue"}
        </Link>
      </div>
    </div>
  );
}
