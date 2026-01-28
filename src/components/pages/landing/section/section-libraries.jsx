import { useState } from "react";

function SectionLibraries() {
  const libraries = [
    { label: "GSAP", description: "스크롤 기반 고급 애니메이션 구현" },
    { label: "Motion", description: "UI 전환 및 컴포넌트 인터랙션 구현" },
    { label: "Swiper", description: "슬라이드 UI 및 캐러셀 구현" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <section 
      id="libraries" 
      className="relative w-full h-screen"
    >
      <ul className="w-full h-full flex flex-col md:flex-row justify-between">
        <li className="w-full md:w-[calc(100vw-500px)] h-[calc(100vh-220px)] md:h-full flex justify-center md:justify-start items-center">
          {currentIndex === null ? (
            /* 초기 타이틀 */
            <h1 className="flex flex-col md:gap-2 font-extrabold leading-none md:ml-20 text-5xl md:text-7xl md:text-left">
              <span>Examples of</span>
              <span>interaction in use.</span>
            </h1>
          ) : (
            /* 탭 콘텐츠 */
            <div
              role="tabpanel"
              className="flex flex-col gap-4 md:gap-8 w-full h-full text-left p-10 md:p-20 pt-22 md:pt-35"
            >
              <div className="w-full h-full bg-[#B0B0B0] rounded-lg"></div>
              <div className="flex flex-col gap-4 md:gap-8">
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
        <li className="flex items-center w-full md:w-[500px] h-[220px] md:h-full">
          <div role="tablist" className="flex flex-col md:flex-row items-center md:justify-center w-full md:w-[500px] h-full">
            {libraries.map((lib, idx) => (
              <button
                key={lib.label}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                className={`w-full md:w-[240px] h-full text-lg md:text-4xl md:text-left px-10 md:px-20 border-t md:border-t-0 md:border-r border-[#B0B0B0] md:[writing-mode:vertical-rl] md:rotate-180 cursor-pointer hover:text-[var(--foreground)] transition-colors duration-200 ease-out ${
                  idx === currentIndex ? "" : "text-[var(--muted-foreground)]"
                }`}
                onClick={() => setCurrentIndex(idx)}
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
