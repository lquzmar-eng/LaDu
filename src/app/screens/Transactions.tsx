import { CameraScanner } from "../components/CameraScanner";
import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { VoiceButton } from "../components/VoiceButton";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Transactions() {
  const { language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");

  // 💰 transactions state
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      emoji: "🍕",
      name: "Pizza",
      amount: -120,
      type: "expense",
      date: "Today",
    },
  ]);

  // 🤖 Add AI transaction (SAFE)
  const addAITransaction = (data: any) => {
    if (!data) return;

    const newTransaction = {
      id: Date.now(),
      emoji: "🤖",
      name: data.store || "AI Expense",
      amount: data.amount ? -Number(data.amount) : 0,
      type: "expense",
      date: "Now",
      category: data.category || "Unknown",
      note: data.note || "",
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const filtered = transactions.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white px-6 pt-8 pb-6 sticky top-0 shadow-sm">

        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>

          <h1 className="text-2xl">
            {language === "ar" ? "المعاملات" : "Transactions"}
          </h1>
        </div>

        {/* SEARCH */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

          <input
            className="w-full pl-10 pr-3 py-2 border rounded-lg"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* LIST */}
      <div className="p-6 space-y-3">
        {filtered.map((t) => (
          <motion.div
            key={t.id}
            className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center"
          >
            <span>
              {t.emoji} {t.name}
            </span>

            <span className={t.amount < 0 ? "text-red-500" : "text-green-500"}>
              {t.amount}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 📷 CAMERA + AI */}
      <div className="px-6 mb-6">
        <h3 className="text-lg mb-2">Scan Receipt 📷</h3>

        <CameraScanner
          onCapture={(data : any) => {
            console.log("🤖 RAW AI DATA:", data);

            let parsed = data;

            try {
              if (typeof data === "string") {
                parsed = JSON.parse(data);
              }
            } catch (e) {
              console.log("⚠️ AI returned non-JSON");

              parsed = {
                store: "Unknown",
                amount: 0,
                category: "Unknown",
                note: data,
              };
            }

            addAITransaction(parsed);
          }}
        />
      </div>

      {/* 🎤 VOICE */}
      <VoiceButton />
    </div>
  );
}