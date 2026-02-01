import { useEffect, useState } from "react";

function SectionMain() {
  const lines = [
    "> Initializing portfolio system...",
    "> Frontend Publisher / UI Implementation",
    "> Status: Ready."
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [output, setOutput] = useState([]);

  // 🔹 글자 타이핑 속도 (빠름 유지)
  const typingSpeed = 30 + Math.random() * 20 + lineIndex * 10;

  // 🔹 문장 하나 끝났을 때 내려가는 딜레이 (핵심)
  const LINE_DELAY = 250; // 200~350 사이로 조절 추천

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    // 🔸 아직 글자 타이핑 중
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setOutput((prev) => {
          const next = [...prev];
          next[lineIndex] =
            (next[lineIndex] || "") + currentLine[charIndex];
          return next;
        });
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    // 🔸 문장 하나 끝남 → 잠깐 멈췄다가 다음 줄
    const lineTimer = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, LINE_DELAY);

    return () => clearTimeout(lineTimer);
  }, [charIndex, lineIndex]);

  const isDone = lineIndex >= lines.length;

  return (
    <section
      id="main"
      className="relative w-full h-screen px-4 sm:px-10 md:px-20 bg-[#F2EFEA]"
    >
      {/* 메인 타이틀 */}
      <div className="flex items-center justify-center md:items-start md:justify-start h-[50%] md:h-full">
        <h1 className="absolute flex flex-col font-extrabold leading-none text-7xl md:text-[205px] md:left-20 md:top-40 md:text-left">
          <span>BASIC TO</span>
          <span>BASIC</span>
        </h1>
      </div>

      {/* 자기소개 */}
      <div className="absolute left-10 md:left-20 bottom-10 md:bottom-20">
        <div className="flex flex-col gap-1 md:gap-2 text-xl leading-none text-left">
          <p>BASIC TO</p>
          <p>BASIC</p>
          <p>BASIC</p>
          <p>BASIC</p>
        </div>
      </div>

      {/* 타이핑 영역 */}
      <div
        className="
          absolute right-10 md:right-20 bottom-10 md:bottom-20
          w-[calc(100%-80px)] md:w-[420px]
          h-[180px] p-6
          rounded-xl
          bg-stone-900
          font-mono
          text-green-400
          text-sm md:text-base
          leading-relaxed
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
    </section>
  );
}

export default SectionMain;
