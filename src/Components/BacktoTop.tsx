"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed cursor-pointer bottom-12 right-3 p-3 transition-all duration-500  ${
        isVisible ? "opacity-100 translate-y-[-10px] " : "opacity-0"
      }`}
    >
      <span style={{ fontSize: "30px" }} className="material-symbols-outlined">
        vertical_align_top
      </span>
    </button>
  );
}
