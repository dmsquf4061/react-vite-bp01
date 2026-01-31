import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

const worksdata = [
  {
    id: "0",
    header: {
      title: "PORTFOLIO_01",
      period: "1 month (2026.01 – 2026.02)",
      techStack: ["React", "Tailwind CSS", "GSAP", "Swiper", "React", "Tailwind CSS", "GSAP", "Swiper"],
    },
    hero: {
      image: "/works/img1.webp",
      alt: "Aromatica main visual",
    },
    concept: {
      description:
        "A clean and minimal vegan beauty brand renewal. The focus was on clarity, balance, and subtle interaction.",
    },
    typography: {
      fontFamily: [{ name: "Pretendard", value: "Pretendard" }],
    },
    colorPalette: {
      colors: [
        { name: "Background", hex: "#0B0B0B" },
        { name: "Text", hex: "#FFFFFF" },
      ],
    },
    process: {
      description:
        "Improved usability by simplifying layout and enhancing scroll-based interactions for smoother user flow.",
    },
  },
  {
    id: "1",
    header: {
      title: "PORTFOLIO_02",
      period: "1 month (2026.01 – 2026.02)",
      techStack: ["React", "Tailwind CSS", "GSAP", "Swiper"],
    },
    hero: {
      image: "/works/img2.webpv",
      alt: "Aromatica main visual",
    },
    concept: {
      description:
        "A clean and minimal vegan beauty brand renewal. The focus was on clarity, balance, and subtle interaction.",
    },
    typography: {
      fontFamily: [{ name: "Pretendard", value: "Pretendard" }],
    },
    colorPalette: {
      colors: [
        { name: "Background", hex: "#0B0B0B" },
        { name: "Text", hex: "#FFFFFF" },
      ],
    },
    process: {
      description:
        "Improved usability by simplifying layout and enhancing scroll-based interactions for smoother user flow.",
    },
  },
  {
    id: "2",
    header: {
      title: "PORTFOLIO_03",
      period: "1 month (2026.01 – 2026.02)",
      techStack: ["React", "Tailwind CSS", "GSAP", "Swiper"],
    },
    hero: {
      image: "/works/img3.webp",
      alt: "Aromatica main visual",
    },
    concept: {
      description:
        "A clean and minimal vegan beauty brand renewal. The focus was on clarity, balance, and subtle interaction.",
    },
    typography: {
      fontFamily: [{ name: "Pretendard", value: "Pretendard" }],
    },
    colorPalette: {
      colors: [
        { name: "Background", hex: "#0B0B0B" },
        { name: "Text", hex: "#FFFFFF" },
      ],
    },
    process: {
      description:
        "Improved usability by simplifying layout and enhancing scroll-based interactions for smoother user flow.",
    },
  },
  {
    id: "3",
    header: {
      title: "PORTFOLIO_04",
      period: "1 month (2026.01 – 2026.02)",
      techStack: ["React", "Tailwind CSS", "GSAP", "Swiper"],
    },
    hero: {
      image: "/works/img4.webp",
      alt: "Aromatica main visual",
    },
    concept: {
      description:
        "A clean and minimal vegan beauty brand renewal. The focus was on clarity, balance, and subtle interaction.",
    },
    typography: {
      fontFamily: [{ name: "Pretendard", value: "Pretendard" }],
    },
    colorPalette: {
      colors: [
        { name: "Background", hex: "#0B0B0B" },
        { name: "Text", hex: "#FFFFFF" },
      ],
    },
    process: {
      description:
        "Improved usability by simplifying layout and enhancing scroll-based interactions for smoother user flow.",
    },
  },
];

function Details() {
  const { id } = useParams();

  const work = useMemo(() => {
    if (!id) return null;
    return worksdata.find((w) => w.id === id) ?? null;
  }, [id]);

  // if (!work) {
  //   return (
  //     <section className="px-10 py-20 bg-black text-white">
  //       <h1 className="text-3xl mb-3">Work not found</h1>
  //       <p className="opacity-60">잘못된 주소이거나 삭제된 포트폴리오입니다.</p>
  //       <Link
  //         to="/#works"
  //         className="inline-block mt-8 px-4 py-2 border border-white/30 rounded-lg hover:bg-white hover:text-black transition"
  //       >
  //         Back to Works
  //       </Link>
  //     </section>
  //   );
  // }

  return (
    <section className="px-10 md:px-20 pb-20 pt-25 md:pt-50 bg-black text-white">
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl mb-6">{work.header.title}</h1>
        <p className="text-[var(--muted-foreground)]">{work.header.period}</p>

        <ul className="flex flex-wrap justify-center gap-2 mt-6 w-[50%]">
          {work.header.techStack.map((tech) => (
            <li key={tech} className="px-3 py-1 border border-[var(--primary-foreground)] rounded-full text-[var(--primary-foreground)]">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* HERO */}
      <div className="mt-20 h-[420px] bg-neutral-700 overflow-hidden rounded-xl">
        <img
          src={work.hero.image}
          alt={work.hero.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* CONCEPT */}
      <div className="mt-32 text-left">
        <h2 className="text-sm tracking-widest opacity-60">CONCEPT</h2>
        <div className="mt-4 h-px bg-white/20" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-70">
          {work.concept.description}
        </p>
      </div>

      {/* TYPOGRAPHY + COLOR PALETTE */}
      <div className="mt-24 grid grid-cols-1 text-left md:grid-cols-2 gap-20">
        {/* TYPOGRAPHY */}
        <div>
          <h2 className="text-sm tracking-widest opacity-60">TYPOGRAPHY</h2>
          <div className="mt-4 h-px bg-white/20" />
          <div className="mt-10">
            <p className="text-4xl mb-6" style={{ fontFamily: work.typography.fontFamily[0]?.value }}>
              {work.typography.fontFamily[0]?.name ?? "Typography"}
            </p>
            <p
              className="text-sm opacity-60 mb-2"
              style={{ fontFamily: work.typography.fontFamily[0]?.value }}
            >
              가나다라마바사아자차카타파하
            </p>
            <p
              className="text-sm opacity-40 tracking-wider"
              style={{ fontFamily: work.typography.fontFamily[0]?.value }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
          </div>
        </div>

        {/* COLOR PALETTE */}
        <div>
          <h2 className="text-sm tracking-widest opacity-60">COLOR PALETTE</h2>
          <div className="mt-4 h-px bg-white/20" />
          {/* 이미지처럼 스퀘어만 2~3개 보여주고 싶으면 여기만 바꾸면 됨 */}
          <ul className="mt-10 flex gap-6">
            {work.colorPalette.colors.slice(0, 2).map((color) => (
              <li key={color.hex} className="relative group">
                {/* 컬러 박스 */}
                <div
                  className="w-20 h-20 rounded-lg cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                />

                {/* 중앙 텍스트 오버레이 */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white bg-black/40  backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none rounded-lg">
                  {color.hex}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PROCESS (전체폭, 아래) */}
      <div className="mt-24 text-left">
        <h2 className="text-sm tracking-widest opacity-60">PROCESS & SOLUTIONS</h2>
        <div className="mt-4 h-px bg-white/20" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-70">
          {work.process.description}
        </p>
      </div>
    </section>
  );
}

export default Details;
