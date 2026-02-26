"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

export default function StudentLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email.trim()) { toast.error("Email is required"); return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { toast.error("Please enter a valid email address"); return false; }
    if (!mobile.trim()) { toast.error("Password is required"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mobile }),
      });
      const data = await res.json();
      if (!res.ok) { toast.error(data.error || "Invalid credentials"); setLoading(false); return; }
      localStorage.setItem("studentName", data.user?.name ?? "");
      toast.success(`Welcome back, ${data.user?.name || 'Student'} 👋`);
      router.push("/student/dashboard/welcome");
    } catch {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 6000 }} />
      {/* Poppins font + custom animations / neumorphic styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        @keyframes growDown {
          0%   { transform: scaleY(0); }
          80%  { transform: scaleY(1.1); }
          100% { transform: scaleY(1); }
        }
        .grow-down {
          animation: growDown 0.5s ease-in-out forwards;
          transform-origin: top center;
        }
        .form-field {
          display: flex;
          align-items: center;
          background: #d9dde8;
          border-radius: 9999px;
          overflow: hidden;
          padding: 4px;
        }
        .form-field .field-icon {
          background: #0d2137;
          border-radius: 9999px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-right: 10px;
        }
        .form-field input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 1rem;
          color: #1a1a2e;
          padding: 6px 4px;
          font-family: 'Poppins', sans-serif;
        }
        .form-field input::placeholder { color: #6b7280; }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 50%, #60a5fa 100%)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="grow-down w-full p-8"
          style={{
            maxWidth: "360px",
            background: "#0A243A",
            borderRadius: "15px",
            boxShadow: "8px 8px 8px #cbced1, -8px -8px 8px #fff",
          }}
        >
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="VIT logo"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid #d4af37",
              }}
            />
          </div>

          {/* Title */}
          <p
            className="text-center font-semibold tracking-wider mb-5"
            style={{ color: "#fff", fontSize: "1.2rem" }}
          >
            Student Login
          </p>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-field">
              <span className="field-icon">
                <i className="fa-solid fa-user" style={{ color: "#fff", fontSize: "1rem" }} />
              </span>
              <input
                type="text"
                name="email"
                placeholder="Username"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password / mobile */}
            <div className="form-field">
              <span className="field-icon">
                <i className="fa-solid fa-key" style={{ color: "#fff", fontSize: "1rem" }} />
              </span>
              <input
                type="password"
                name="mobile"
                placeholder="Password"
                required
                autoComplete="off"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                height: "42px",
                background: loading ? "#b45309" : "#d97706",
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.1rem",
                borderRadius: "9999px",
                boxShadow: "3px 3px 3px #b1b1b1, -3px -3px 3px #fff",
                letterSpacing: "0.05em",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.5s",
                fontFamily: "'Poppins', sans-serif",
              }}
              onMouseEnter={(e) => { if (!loading) (e.currentTarget.style.background = "#039BE5"); }}
              onMouseLeave={(e) => { if (!loading) (e.currentTarget.style.background = "#d97706"); }}
            >
              {loading ? "Logging in…" : "Login"}
            </button>
          </form>

          {/* Links */}
          <div style={{ textAlign: "center", marginTop: "16px", color: "#fff", fontSize: "0.95rem" }}>
            <a
              href="#"
              style={{ color: "#facc15", textShadow: "2px 2px 4px rgba(0,0,0,0.8)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#039BE5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#facc15")}
            >
              Forget password?
            </a>
            <span style={{ margin: "0 8px" }}>or</span>
            <a
              href="#"
              style={{ color: "#facc15", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#039BE5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#facc15")}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
