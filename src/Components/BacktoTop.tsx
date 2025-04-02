"use client";

import { clear } from "console";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    let timer: NodeJS.Timeout;
    if (isVisible) {
      timer = setTimeout(() => setIsVisible(false), 3000);
    }

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  setTimeout(() => {
    setIsVisible(false);
  }, 3000);

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
