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

  // 자동 순환
  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <section 
      id="skills" 
      className="relative flex flex-col justify-center gap-15 w-full h-screen pt-10 md:pt-0 px-10 md:px-20 bg-[#191818]"
    >
      {/* 메인 타이틀 */}
      <div className="flex justify-center md:justify-start items-center md:items-start w-full h-auto md:h-full">
        <h1 className="md:absolute md:left-20 md:top-60 flex flex-col font-extrabold leading-none text-5xl md:text-7xl md:text-left text-white">
          <span>What I work</span>
          <span>with</span>
        </h1>
      </div>

      {/* 스킬및툴 */}
      <div className="md:absolute right-0 md:right-20 md:top-0 flex justify-center md:justify-start items-center w-full md:w-[35%] h-[30%] md:h-full overflow-hidden">
        <ul className="relative flex flex-col gap-5 md:gap-9 md:text-left text-4xl md:text-5xl text-white">
          {skills.map((skill, idx) => (
            <li
              key={skill.label}
              className={`transition-opacity duration-300 ${
                idx === skillIndex ? "opacity-100" : "opacity-40"
              }`}
            >
              {skill.label}
            </li>
          ))}
        </ul>
      </div>

      {/* 스킬및툴 설명 */}
      <div className="md:absolute left-0 md:left-20 bottom-0 md:bottom-40 flex items-center justify-center w-full md:w-[calc(100%-80px)] md:w-auto">
        <div className="flex flex-col md:w-100 text-left text-xl leading-none text-[#B0B0B0]">
          <div className="hidden md:block flex items-center w-100 font-bold text-lg md:text-2xl border-b border-[#B0B0B0] pb-5">
            {skills[skillIndex].label}
          </div>

          <div className="flex justify-center md:justify-start md:mt-5 text-xs md:text-base">
            <p className="hidden md:block md:w-25 font-bold">Tool</p>
            <div className="flexs">
              {skills[skillIndex].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
