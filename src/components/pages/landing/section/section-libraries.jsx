import { useState } from "react";

function SectionLibraries() {
  const libraries = [
    { label: "GSAP", description: "스크롤 기반 고급 애니메이션 구현" },
    { label: "Motion", description: "UI 전환 및 컴포넌트 인터랙션 구현" },
    { label: "Swiper", description: "슬라이드 UI 및 캐러셀 구현" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <section id="libraries" className="w-full h-screen">
      <ul className="flex w-full h-full flex-col md:flex-row justify-between">
        {/* 좌측 콘텐츠 */}
        <li className="flex w-full md:w-[calc(100vw-500px)] h-[calc(100vh-220px)] md:h-full items-center justify-center md:justify-start">
          {currentIndex === null ? (
            <h1 className="flex flex-col font-extrabold leading-none md:ml-20 text-5xl md:text-7xl md:text-left">
              <span>Examples of</span>
              <span>interaction in use.</span>
            </h1>
          ) : (
            <div
              role="tabpanel"
              className="flex w-full h-full flex-col gap-4 md:gap-8 p-4 sm:p-10 md:p-20 pt-18 sm:pt-22 md:pt-35"
            >
              <div className="w-full h-full rounded-lg bg-[#B0B0B0]" />
              <div className="flex flex-col gap-4 md:gap-8 text-left">
                <p className="text-4xl md:text-6xl font-bold">
                  {libraries[currentIndex].label}
                </p>
                <p className="text-xs md:text-base text-gray-400">
                  {libraries[currentIndex].description}
                </p>
              </div>
            </div>
          )}
        </li>

        {/* 탭 영역 */}
        <li className="flex w-full md:w-[500px] h-[220px] md:h-full items-center">
          <div
            role="tablist"
            className="flex w-full h-full flex-col md:flex-row items-center md:justify-center md:w-[500px]"
          >
            {libraries.map((lib, idx) => (
              <button
                key={lib.label}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  w-full md:w-[240px] h-full
                  px-10 md:px-20
                  text-lg md:text-4xl md:text-left
                  cursor-pointer
                  border-t md:border-t-0 md:border-r border-[#B0B0B0]
                  md:[writing-mode:vertical-rl] md:rotate-180
                  transition-colors duration-200
                  ${idx === currentIndex
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}
                `}
              >
                {lib.label}
              </button>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SectionLibraries;
