import { useEffect, useState } from "react";

const NAME = "ROHIT MANDWADE";
const SUB = "AI Engineer • Computer Vision • Agentic AI";
const EXIT_AT = 2100;
const UNMOUNT_AT = 2900;

export default function IntroSplash() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">(() =>
    sessionStorage.getItem("introShown") ? "done" : "show"
  );

  useEffect(() => {
    if (phase === "done") return;
    sessionStorage.setItem("introShown", "1");
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("exit"), EXIT_AT);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, UNMOUNT_AT);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-splash ${phase === "exit" ? "intro-splash-exit" : ""}`}
      aria-hidden="true"
    >
      <div className="intro-splash-content">
        <h1 className="intro-splash-name">
          {NAME.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i} className="inline-block w-4 md:w-6" />
            ) : (
              <span
                key={i}
                className="intro-splash-letter"
                style={{ animationDelay: `${0.15 + i * 0.055}s` }}
              >
                {ch}
              </span>
            )
          )}
        </h1>
        <div className="intro-splash-line" />
        <p className="intro-splash-sub">{SUB}</p>
      </div>
    </div>
  );
}
