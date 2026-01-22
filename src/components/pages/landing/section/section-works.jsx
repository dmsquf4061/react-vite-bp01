function SectionWorks() {
  const works = [
    { title: "", src: "" },
    { title: "", src: "" },
    { title: "", src: "" },
    { title: "", src: "" }
  ];

  return (
    <section 
      id="works" 
      className="relative flex flex-col w-full h-screen bg-[#F8F8F8]"
    >
      {/* 메인 타이틀 */}
      <div className="flex justify-center md:justify-start items-center md:items-start md:ml-20 md:mt-60 w-full">
        <h1 className="flex flex-col font-extrabold leading-none text-5xl md:text-7xl md:text-left">
          <span>Some things</span>
          <span>I’ve made</span>
        </h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-20">
        {works.map((work, idx) => (
          <li 
            key={idx}
            className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#ddd]"
          >
            <a href={`/works/${idx}`} className="group block relative overflow-hidden">
              <img
                src={work.src}
                alt={work.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* hover overlay */}
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
                <span className="text-white text-lg font-semibold">
                  {work.title}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SectionWorks