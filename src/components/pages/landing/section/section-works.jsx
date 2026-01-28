import { Link } from "react-router-dom";

function SectionWorks() {
  const works = [
    {
      id: "0",
      title: "PORTFOLIO_01",
      thumbnail: "/assets/images/aromatica/thumb.webp",
    },
    {
      id: "1",
      title: "PORTFOLIO_02",
      thumbnail: "/assets/images/aromatica/thumb.webp",
    },
    {
      id: "2",
      title: "PORTFOLIO_03",
      thumbnail: "/assets/images/aromatica/thumb.webp",
    },
    {
      id: "3",
      title: "PORTFOLIO_04",
      thumbnail: "/assets/images/aromatica/thumb.webp",
    },
  ];

  return (
    <section
      id="works"
      className="relative flex flex-col w-full bg-[#F8F8F8]"
    >
      {/* 타이틀 */}
      <div className="flex justify-center md:justify-start md:ml-20 mt-30 md:mt-50 w-full">
        <h1 className="flex flex-col md:gap-2 font-extrabold leading-none text-5xl md:text-7xl md:text-left">
          <span>Some things</span>
          <span>I’ve made</span>
        </h1>
      </div>

      {/* 리스트 */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 md:px-20 my-10 md:my-20">
        {works.map((work) => (
          <li
            key={work.id}
            className="
              relative rounded-lg overflow-hidden aspect-[4/5]
              bg-[#ddd] cursor-pointer group
            "
          >
            <Link to={`/works/${work.id}`} className="block w-full h-full">
              <img
                src={work.thumbnail}
                alt={work.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover */}
              <div
                className="
                  absolute inset-0
                  bg-black/40 backdrop-blur-sm
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                  flex items-center justify-center
                "
              >
                <span className="text-white text-2xl font-bold">
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
