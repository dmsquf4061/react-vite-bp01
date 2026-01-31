import { useEffect, useState } from "react";

function SectionSkills() {
  const skills = [
    { label: "GitHub", description: "기본적인 버전 관리와 협업 흐름 이해 가능" },
    { label: "Visual Studio", description: "확장 기능과 단축키 활용 가능" },
    { label: "HTML", description: "웹표준 기반 시맨틱 마크업 작성 가능" },
    { label: "CSS", description: "반응형 레이아웃 및 기본 스타일링 가능" },
    { label: "JavaScript", description: "기본 문법과 DOM 제어로 인터랙션 구현 가능" },
    { label: "React", description: "컴포넌트 구조 이해 및 기본 상태 관리 가능" },
    { label: "Illustrator", description: "간단한 UI 아이콘 및 그래픽 작업 가능" },
    { label: "Photoshop", description: "웹용 이미지 보정 및 편집 가능" },
    { label: "Figma", description: "디자인 시안 이해 및 퍼블리싱 활용 가능" },
  ];

  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <section
      id="skills"
      className="relative flex h-screen w-full flex-col justify-center bg-[var(--foreground)] px-10 md:px-20"
    >
      {/* 메인 타이틀 */}
      <div className="flex w-full items-center justify-center md:h-full md:items-start md:justify-start">
        <h1 className="flex flex-col font-extrabold leading-none text-5xl text-white mt-30 md:mt-50 md:text-7xl md:text-left">
          <span>What I work</span>
          <span>with</span>
        </h1>
      </div>

      {/* 스킬 리스트(무한 루프) */}
      <div
        className="
          portfolioCarousel flex w-full flex-col items-center md:items-start overflow-hidden
          md:absolute md:right-20 md:top-0 md:h-full md:w-[35%]
          [mask-image:_linear-gradient(to_bottom,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]
        "
      >
        <ul className="flex flex-col flex-shrink-0 mt-30 md:mt-50 gap-5 md:gap-9 pb-9 text-4xl md:text-5xl text-white whitespace-nowrap">
          {skills.map((skill, idx) => (
            <li key={`skill-${idx}`}>{skill.label}</li>
          ))}
        </ul>

        <ul
          className="flex flex-col flex-shrink-0 gap-5 md:gap-9 pb-9 text-4xl md:text-5xl text-white whitespace-nowrap"
          aria-hidden
        >
          {skills.map((skill, idx) => (
            <li key={`skill-clone-${idx}`}>{skill.label}</li>
          ))}
        </ul>
      </div>

      {/* 스킬 설명 */}
      <div className="flex w-full items-center justify-center md:absolute md:left-20 md:bottom-40 md:w-auto">
        <div className="flex flex-col text-xl leading-none text-[var(--primary-foreground)] md:w-100">
          <div className="hidden md:block w-100 border-b border-[var(--primary-foreground)] pb-5 text-lg font-bold md:text-2xl">
            {skills[skillIndex].label}
          </div>

          <div className="flex justify-center md:justify-start text-xs md:mt-5 md:text-base">
            <p className="hidden md:block md:w-25 font-bold">Tool</p>
            <div>{skills[skillIndex].description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
