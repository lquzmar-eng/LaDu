import { ArrowLeft, CheckCircle, Volume2 } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function Debts() {
  const { language } = useLanguage();
  const youAreOwed = [
    {
      id: 1,
      name: "Sarah Ahmed",
      amount: 500,
      date: "Apr 22",
      note: "Dinner split last weekend",
      avatar: "👩",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      amount: 300,
      date: "Apr 18",
      note: "Movie tickets",
      avatar: "👨",
    },
  ];

  const youOwe = [
    {
      id: 3,
      name: "Amira Hassan",
      amount: 750,
      date: "Apr 20",
      note: "Shared birthday gift",
      avatar: "👩",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`} />
          </Link>
          <h1 className="text-2xl text-gray-900">
            {language === "ar" ? "الديون والقروض" : "Debts & Loans"}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-sm text-green-700 mb-1">
              {language === "ar" ? "مستحق لك" : "You are owed"}
            </p>
            <p className="text-2xl text-green-900">
              {youAreOwed.reduce((sum, d) => sum + d.amount, 0)} {language === "ar" ? "$" : "USD"}
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <p className="text-sm text-red-700 mb-1">
              {language === "ar" ? "عليك دفعه" : "You owe"}
            </p>
            <p className="text-2xl text-red-900">
              {youOwe.reduce((sum, d) => sum + d.amount, 0)} {language === "ar" ? "$" : "USD"}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div>
          <h2 className="text-lg text-gray-900 mb-4">
            {language === "ar" ? "مستحق لك" : "You Are Owed"}
          </h2>
          {youAreOwed.length > 0 ? (
            <div className="space-y-3">
              {youAreOwed.map((debt) => (
                <div key={debt.id} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {debt.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-gray-900">{debt.name}</p>
                        <p className="text-lg text-green-600">+{debt.amount} {language === "ar" ? "$" : "USD"}</p>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{debt.date}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <Volume2 className="w-4 h-4 flex-shrink-0" />
                        <p className="truncate">"{debt.note}"</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {language === "ar" ? "تم الاستلام" : "Mark as Received"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-3">💰</div>
              <p className="text-gray-600 mb-1">
                {language === "ar" ? "لا توجد ديون معلقة" : "No pending debts"}
              </p>
              <p className="text-sm text-gray-500">
                {language === "ar" ? "الأشخاص الذين يدينون لك سيظهرون هنا" : "People who owe you will appear here"}
              </p>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg text-gray-900 mb-4">
            {language === "ar" ? "عليك دفعه" : "You Owe"}
          </h2>
          {youOwe.length > 0 ? (
            <div className="space-y-3">
              {youOwe.map((debt) => (
                <div key={debt.id} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {debt.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-gray-900">{debt.name}</p>
                        <p className="text-lg text-red-600">-{debt.amount} {language === "ar" ? "$" : "USD"}</p>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{debt.date}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                        <Volume2 className="w-4 h-4 flex-shrink-0" />
                        <p className="truncate">"{debt.note}"</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {language === "ar" ? "تم الدفع" : "Mark as Paid"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-3">✅</div>
              <p className="text-gray-600 mb-1">
                {language === "ar" ? "كله تمام!" : "You're all clear!"}
              </p>
              <p className="text-sm text-gray-500">
                {language === "ar" ? "لا توجد ديون معلقة" : "No outstanding debts"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
