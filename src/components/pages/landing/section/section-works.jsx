import { Link } from "react-router-dom";

function SectionWorks({ handleOpen }) {
  const works = [
    { id: "0", title: "PORTFOLIO_01", thumbnail: "/works/img1.webp" },
    { id: "1", title: "PORTFOLIO_02", thumbnail: "/works/img2.webp" },
    { id: "2", title: "PORTFOLIO_03", thumbnail: "/works/img3.webp" },
    { id: "3", title: "PORTFOLIO_04", thumbnail: "/works/img4.webp" },
  ];

  return (
    <section id="works" className="flex w-full flex-col bg-[#F8F8F8]">
      {/* 타이틀 */}
      <div className="mt-30 md:mt-50 flex w-full justify-center ml-4 sm:ml-10 md:ml-20 md:justify-start">
        <h1 className="flex flex-col font-extrabold leading-none text-5xl md:text-7xl md:text-left">
          <span>Some things</span>
          <span>I’ve made</span>
        </h1>
      </div>

      {/* 리스트 */}
      <ul className="my-10 md:my-20 grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-3 px-4 sm:px-10 md:px-20">
        {works.map((work) => (
          <li
            key={work.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
          >
            <Link to={`/works/${work.id}`} className="block h-full w-full">
              <img
                src={work.thumbnail}
                alt={work.title}
                className="
                  h-full w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-black/40 backdrop-blur-sm
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                "
              >
                <span className="text-2xl font-bold text-white">
                  {work.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SectionWorks;
