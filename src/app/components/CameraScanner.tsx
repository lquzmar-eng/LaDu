import { useRef, useState } from "react";

export function CameraScanner({ onCapture }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // 📷 تشغيل الكاميرا
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setOpen(true);
    } catch (err) {
      console.log(err);
      alert("Camera error");
    }
  };

  // 📸 تصوير + إرسال للـ AI
  const capture = async () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    console.log("📸 Captured image");

    setLoading(true);

    try {
      // 🤖 إرسال للـ backend AI
      const res = await fetch("http://localhost:5000/analyze-receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image }),
      });

      const data = await res.json();

      console.log("🤖 AI RESULT:", data);

      // 📤 رجّع النتيجة للـ parent
      onCapture?.(data.result);

    } catch (err) {
      console.error("❌ AI Error:", err);
      alert("AI processing failed");
    } finally {
      setLoading(false);
    }
  };

  // ❌ إغلاق الكاميرا
  const closeCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setOpen(false);
  };

  return (
    <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>

      {/* 🔘 فتح الكاميرا */}
      {!open && (
        <button
          onClick={openCamera}
          style={{
            padding: "10px 16px",
            background: "#0F3D2E",
            color: "white",
            border: "none",
            borderRadius: 10,
          }}
        >
          📷 Open Camera
        </button>
      )}

      {/* 🎥 الكاميرا */}
      {open && (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: 12,
              background: "black",
            }}
          />

          {/* ⏳ Loading */}
          {loading && (
            <p style={{ color: "gray", marginTop: 8 }}>
              🤖 AI is analyzing receipt...
            </p>
          )}

          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <button
              onClick={capture}
              disabled={loading}
              style={{
                background: loading ? "#999" : "#2563eb",
                color: "white",
                padding: 8,
                borderRadius: 8,
              }}
            >
              📸 Capture
            </button>

            <button
              onClick={closeCamera}
              style={{
                background: "#dc2626",
                color: "white",
                padding: 8,
                borderRadius: 8,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}