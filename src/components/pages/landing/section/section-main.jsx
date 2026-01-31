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

  const speed = 160 + Math.random() * 120;

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    const timer = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setOutput((prev) => {
          const next = [...prev];
          next[lineIndex] = (next[lineIndex] || "") + currentLine[charIndex];
          return next;
        });
        setCharIndex((prev) => prev + 1);
        return;
      }

      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, speed);

    return () => clearTimeout(timer);
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
