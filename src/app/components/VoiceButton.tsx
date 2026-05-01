import { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AIInsight } from "./AIInsight";
import { useLanguage } from "../contexts/LanguageContext";

export function VoiceButton({ onRecordingComplete }: any) {
  const { language } = useLanguage();

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [aiInsight, setAiInsight] = useState<any>(null);

  const recognitionRef = useRef<any>(null);
  const finalTextRef = useRef("");

  // 🎤 INIT
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = language === "ar" ? "ar-SA" : "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      console.log("🎤 Mic started");
    };

    recognition.onresult = (event: any) => {
      const text = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");

      finalTextRef.current = text;
      setTranscript(text);
    };

    recognition.onerror = (e: any) => {
      console.log("Speech error:", e);
      setIsRecording(false);
    };

    recognition.onend = () => {
      console.log("🛑 Mic stopped");
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, [language]);

  // 🎤 START
  const handleMouseDown = () => {
    setIsRecording(true);
    setTranscript("");
    finalTextRef.current = "";

    const recognition = recognitionRef.current;

    if (!recognition) return;

    try {
      recognition.stop();
    } catch {}

    setTimeout(() => {
      try {
        recognition.start();
        console.log("🎤 START");
      } catch (e) {
        console.log("Start error:", e);
      }
    }, 100);
  };

  // 🛑 STOP
  const handleMouseUp = () => {
    const recognition = recognitionRef.current;

    try {
      recognition.stop();
    } catch {}

    setIsRecording(false);

    setTimeout(() => {
      const text = finalTextRef.current;

      console.log("FINAL:", text);

      if (text && text.length > 0) {
        setIsProcessing(true);

        setTimeout(() => {
          setIsProcessing(false);
          setShowConfirmation(true);
        }, 700);
      }
    }, 400);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    onRecordingComplete?.(transcript);
    setTranscript("");
  };

  return (
    <>
      <AIInsight insight={aiInsight} onDismiss={() => setAiInsight(null)} />

      {/* transcript */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <AnimatePresence>
          {isRecording && transcript && (
            <motion.div className="bg-white px-6 py-4 rounded-2xl shadow-lg">
              <p>{transcript}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* confirm */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div className="fixed inset-0 bg-black/20 flex items-end justify-center p-4 z-20">
            <motion.div className="bg-white rounded-3xl p-6 w-full max-w-md">
              <h3 className="mb-3">
                {language === "ar" ? "تأكيد" : "Confirm"}
              </h3>

              <p className="mb-4">{transcript}</p>

              <button
                onClick={handleConfirm}
                className="w-full py-2 text-white rounded-xl"
                style={{ backgroundColor: "#0F3D2E" }}
              >
                Confirm
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* mic */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center z-10">
        <motion.button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{
            backgroundColor: isRecording ? "#EF4444" : "#0F3D2E",
          }}
        >
          <Mic className="w-8 h-8 text-white" />
        </motion.button>
      </div>
    </>
  );
}