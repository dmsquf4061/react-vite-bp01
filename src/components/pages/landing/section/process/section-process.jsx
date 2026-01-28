import ContentImg1 from "../process/images/img1.webp";
import ContentImg2 from "../process/images/img2.webp";
import ContentImg3 from "../process/images/img3.webp";
import ContentImg4 from "../process/images/img4.webp";
import ContentImg5 from "../process/images/img5.webp";
import ContentImg6 from "../process/images/img6.webp";

function SectionProcess() {
  const items = [
    {
      image: ContentImg1,
      title: "Fast &\nClear Communication",
      description:
        "팀 내·외부와의 커뮤니케이션을 신속하고 명확하게 유지하여 불필요한 리소스 낭비를 줄입니다.",
    },
    {
      image: ContentImg2,
      title: "On-Time\nDelivery",
      description:
        "일정 준수를 최우선으로 하며, 마감일을 기준으로 안정적인 작업 흐름을 유지합니다.",
    },
    {
      image: ContentImg3,
      title: "Reliable &\nResponsible",
      description:
        "맡은 업무에 끝까지 책임을 지며, 결과물의 완성도에 대한 기준이 명확합니다.",
    },
    {
      image: ContentImg4,
      title: "Proven\nTechnologies",
      description:
        "검증된 기술과 안정적인 구현 방식을 우선으로 선택하여 유지보수성과 확장성을 고려합니다.",
    },
    {
      image: ContentImg5,
      title: "Team-Oriented\nWorkflow",
      description:
        "협업 환경을 고려한 코드 구조와 작업 방식을 지향하며, 팀 생산성을 중시합니다.",
    },
    {
      image: ContentImg6,
      title: "Cross-Browser &\nDevice Compatibility",
      description:
        "주요 브라우저 및 환경에서 일관된 사용자 경험을 제공하려 노력합니다.",
    },
  ];


  return (
    <section id="process" className="relative w-full h-screen bg-white flex flex-col justify-between">
      {/* 타이틀 */}
      <div className="flex justify-center md:justify-start md:ml-20 mt-30 md:mt-50 w-full">
        <h1 className="flex flex-col md:gap-2 font-extrabold leading-none text-5xl md:text-7xl text-left">
          How I work
        </h1>
      </div>

      {/* 무한 루프 캐러셀 */}
      <div
        className="
          w-full overflow-hidden my-10 md:my-20
          [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]
        "
      >
        {/* 트랙 */}
        <div className="flex w-max animate-marquee">
          {/* 원본 */}
          <ul className="flex gap-5 pr-5 h-[600px]">
            {items.map((item, idx) => (
              <li
                key={`orig-${idx}`}
                className="
                  relative group
                  w-[280px] md:w-[380px]
                  h-full
                  rounded-xl overflow-hidden
                  cursor-pointer
                  bg-neutral-200
                "
              >
                {/* 이미지 */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/55 backdrop-blur-sm
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    flex flex-col items-start justify-center
                    px-8 md:px-10 text-left
                  "
                >
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                    {item.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-white/85 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* 복제본(끊김 방지) */}
          <ul className="flex gap-5 pr-5 h-[600px]" aria-hidden>
            {items.map((item, idx) => (
              <li
                key={`clone-${idx}`}
                className="
                  relative group
                  w-[280px] md:w-[380px]
                  h-full
                  rounded-xl overflow-hidden
                  cursor-pointer
                  bg-neutral-200
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  loading="lazy"
                />
                <div
                  className="
                    absolute inset-0
                    bg-black/55 backdrop-blur-sm
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    flex flex-col items-start justify-center
                    px-8 md:px-10 text-left
                  "
                >
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                    {item.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-white/85 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionProcess;
