'use client';

import { useEffect, useState } from 'react';

// ── Typing intro ────────────────────────────────────────────────────────
const TypingIntro = () => {
  const lines = ['Welcome', 'to', 'Admin Panel'];
  const typingSpeed = 80;
  const pauseAfterLine = 1000;
  const pauseAfterSet = 2000;
  const [displayLines, setDisplayLines] = useState(['', '', '']);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let buffer = ['', '', ''];

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        setTimeout(() => {
          buffer = ['', '', ''];
          setDisplayLines(['', '', '']);
          lineIndex = 0;
          charIndex = 0;
          typeNextChar();
        }, pauseAfterSet);
        return;
      }
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        buffer[lineIndex] += currentLine.charAt(charIndex);
        setDisplayLines([...buffer]);
        charIndex++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNextChar, pauseAfterLine);
      }
    };
    typeNextChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-yellow-600 [text-shadow:_0px_0px_6px_#e0b159] font-mono flex flex-col items-center justify-center space-y-2 text-3xl sm:text-4xl md:text-5xl font-extrabold w-full max-w-[90vw] sm:max-w-xl text-center">
      <span>{displayLines[0]}</span>
      <span>{displayLines[1]}</span>
      <span>{displayLines[2]}</span>
    </div>
  );
};

export default function AdminWelcome() {
  return (
    <>
      {/* College header banner */}
      <div className="bg-blue-950 flex flex-col sm:flex-row items-center justify-between px-4 py-4 rounded-md mb-6 gap-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-24 h-24 object-cover rounded-full border-4 border-[#e9e9e9]"
        />
        <h2 className="sm:text-2xl lg:text-4xl font-bold text-center text-white sm:text-left flex-1 sm:ml-0 lg:ml-5">
          Vedanta Institute of Technology
        </h2>
        <a
          href="tel:+91-9433558306"
          className="h-11 px-6 bg-yellow-600 text-white text-lg rounded-md duration-700 hover:rounded-3xl whitespace-nowrap cursor-pointer transition-all hover:scale-105 flex items-center"
        >
          Contact Us
        </a>
      </div>

      {/* Typing animation */}
      <div className="w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-transparent shadow mx-auto px-4 sm:px-6 py-6 mt-10 sm:mt-20 flex flex-col sm:flex-row justify-center items-center border-r-0 sm:border-r-4 border-r-blue-950 border-b-4 border-b-blue-950 rounded-2xl">
        <TypingIntro />
      </div>
    </>
  );
}
