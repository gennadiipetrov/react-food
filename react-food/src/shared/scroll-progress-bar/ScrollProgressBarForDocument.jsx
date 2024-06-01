import "./style.css";
import { useState, useEffect } from "react";

const ScrollProgressBarForDocument = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scroll = () => {
      const value = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
      setScrollProgress(value);
    }

    document.addEventListener("scroll", scroll);
    window.addEventListener("resize", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="line" style={{ width: scrollProgress + "%" }} />
    </div>
  );
};

export default ScrollProgressBarForDocument;