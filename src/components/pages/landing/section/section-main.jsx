import { useEffect, useState } from "react";

function SectionMain() {
  const lines = [
    "> Initializing portfolio system...",
    "> Frontend Publisher / UI Implementation",
    "> Status: Ready.",
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [output, setOutput] = useState([]);

  const typingSpeed = 30 + Math.random() * 20 + lineIndex * 10;
  const LINE_DELAY = 250;

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setOutput((prev) => {
          const next = [...prev];
          next[lineIndex] = (next[lineIndex] || "") + currentLine[charIndex];
          return next;
        });
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    const lineTimer = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, LINE_DELAY);

    return () => clearTimeout(lineTimer);
  }, [charIndex, lineIndex]);

  const isDone = lineIndex >= lines.length;

  // 팔레트 컬러만
  const layerA = {
    backgroundImage: [
      "radial-gradient(85% 85% at 18% 28%, rgba(244,241,236,0.95) 0%, rgba(244,241,236,0.34) 52%, rgba(244,241,236,0) 78%)",
      "radial-gradient(80% 80% at 82% 30%, rgba(230,229,237,0.95) 0%, rgba(230,229,237,0.32) 55%, rgba(230,229,237,0) 80%)",
    ].join(", "),
  };

  const layerB = {
    backgroundImage:
      "radial-gradient(90% 90% at 55% 78%, rgba(212,219,220,0.92) 0%, rgba(212,219,220,0.26) 58%, rgba(212,219,220,0) 84%)",
  };

  const layerC = {
    backgroundImage:
      "radial-gradient(95% 95% at 50% 40%, rgba(242,242,241,0.90) 0%, rgba(242,242,241,0.16) 62%, rgba(242,242,241,0) 88%)",
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
{/* ===== base ===== */}
<div className="absolute inset-0 bg-[#EEEDEC]" />

{/* ===== layer A : 메인 포인트 (더 진하게) ===== */}
<div
  className="pointer-events-none absolute -inset-[12%] blur-[18px] opacity-100 animate-driftA"
  style={{
    backgroundImage: `
      radial-gradient(760px 520px at 18% 28%,
        rgba(242,239,234,1) 0%,
        rgba(242,239,234,0.95) 22%,
        rgba(242,239,234,0.65) 44%,
        rgba(242,239,234,0) 68%
      ),
      radial-gradient(760px 520px at 82% 30%,
        rgba(221,220,230,1) 0%,
        rgba(221,220,230,0.95) 22%,
        rgba(221,220,230,0.65) 44%,
        rgba(221,220,230,0) 68%
      )
    `,
  }}
/>

{/* ===== layer B : 보조 포인트 (존재감 강화) ===== */}
<div
  className="pointer-events-none absolute -inset-[14%] blur-[28px] opacity-100 animate-driftB"
  style={{
    backgroundImage: `
      radial-gradient(860px 620px at 55% 78%,
        rgba(200,208,211,1) 0%,
        rgba(200,208,211,0.90) 26%,
        rgba(200,208,211,0.55) 48%,
        rgba(200,208,211,0) 72%
      )
    `,
  }}
/>

{/* ===== layer C : 깊이감 (진하지만 과하지 않게) ===== */}
<div
  className="pointer-events-none absolute -inset-[16%] blur-[40px] opacity-90 animate-driftC"
  style={{
    backgroundImage: `
      radial-gradient(980px 760px at 45% 50%,
        rgba(242,239,234,1) 0%,
        rgba(242,239,234,0.65) 52%,
        rgba(242,239,234,0) 78%
      )
    `,
  }}
/>







      {/* ✅ 라이트 오버레이: “덮어버리면” 안 보이니까 아주 약하게만 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 120% at 50% 45%, rgba(242,239,234,0.55) 0%, rgba(242,239,234,0.20) 45%, rgba(242,239,234,0.0) 75%)",
          opacity: 0.35, // ✅ 핵심: 0.9 → 0.35
        }}
      />

      {/* content */}
      <div className="relative z-10 h-full px-4 sm:px-10 md:px-20">
        {/* title */}
        <div className="flex items-center justify-center md:items-start md:justify-start h-[50%] md:h-full">
          <h1 className="absolute flex flex-col font-extrabold leading-none text-7xl md:text-[205px] md:left-20 md:top-40 md:text-left">
            <span>BASIC TO</span>
            <span>BASIC</span>
          </h1>
        </div>

        {/* left text */}
        <div className="absolute left-10 md:left-20 bottom-10 md:bottom-20">
          <div className="flex flex-col gap-1 md:gap-2 text-xl leading-none text-left">
            <p>BASIC TO</p>
            <p>BASIC</p>
            <p>BASIC</p>
            <p>BASIC</p>
          </div>
        </div>

        {/* typing box */}
        <div
          className="
            absolute right-10 md:right-20 bottom-10 md:bottom-20
            w-[calc(100%-80px)] md:w-[420px]
            h-[180px] p-6 rounded-xl
            bg-stone-900 font-mono text-green-400
            text-sm md:text-base leading-relaxed text-left
          "
        >
          {lines.map((_, idx) => {
            const typed = output[idx] || "";
            const isActiveLine = !isDone && idx === lineIndex;
            const isLastLineDone = isDone && idx === lines.length - 1;

            return (
              <p key={idx} className={idx === 2 ? "opacity-80" : ""}>
                {typed}
                {(isActiveLine || isLastLineDone) && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionMain;
