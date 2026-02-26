"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, Toaster } from "sonner";

export default function FacultyLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!username.trim()) { toast.error("Username is required"); return false; }
    if (!password.trim()) { toast.error("Password is required"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/faculty/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Invalid credentials");
        setLoading(false);
        return;
      }
      localStorage.setItem("facultyName", data.user?.name ?? "");
      toast.success(`Welcome back, ${data.user?.name || 'Faculty'} 👋`);
      router.push("/faculty/dashboard");
    } catch {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 6000 }} />
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
          font-size: 0.95rem;
          color: #1a1a2e;
          font-family: 'Poppins', sans-serif;
        }
        .form-field input::placeholder {
          color: #666;
        }
        /* Remove browser autofill background and preserve text color */
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          -webkit-text-fill-color: #1a1a2e !important;
          -webkit-box-shadow: 0 0 0px 1000px #d9dde8 inset !important;
          box-shadow: 0 0 0px 1000px #d9dde8 inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-[Poppins]">
        <div className="grow-down max-w-sm w-full bg-[#0A243A] rounded-[15px] shadow-[8px_8px_8px_#cbced1,-8px_-8px_8px_#fff] p-8">

          {/* Logo */}
          <div className="mb-1 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="College Logo"
              width={224}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Title */}
          <div className="text-center text-white text-xl font-semibold tracking-wider mb-5">
            Faculty Login
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
              <input type="text" name="prevent_autofill_username" autoComplete="username" tabIndex={-1} />
              <input type="password" name="prevent_autofill_password" autoComplete="current-password" tabIndex={-1} />
            </div>
            <div className="form-field">
              <div className="field-icon">
                <i className="fa-solid fa-user fa-beat-fade text-white text-sm" />
              </div>
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-field">
              <div className="field-icon">
                <i className="fa-solid fa-key fa-beat-fade text-white text-sm" />
              </div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-yellow-600 text-white font-bold text-lg rounded-full shadow-[3px_3px_3px_#b1b1b1,-3px_-3px_3px_#fff] tracking-wider hover:bg-[#039BE5] cursor-pointer duration-500 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Links */}
          <div className="text-center text-md mt-4 text-white">
            <a href="#" className="text-yellow-400 [text-shadow:2px_2px_4px_rgba(0,0,0,2)] hover:text-[#039BE5]">
              Forget password?
            </a>
            <span className="mx-2">or</span>
            <a href="#" className="text-yellow-400 hover:text-[#039BE5]">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
