import { ArrowUpRight } from "lucide-react";

function SectionContact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen bg-white"
    >
      <div className="flex flex-col justify-end w-full h-full px-10 md:px-20 pb-15 md:pb-20">

        {/* 메인 타이틀 */}
        <h1 className="
          font-extrabold leading-none
          text-5xl md:text-7xl
          mb-10 text-left
        ">
          <span className="block">Let’s work</span>
          <span className="block">together</span>
        </h1>

        {/* 하단 영역 */}
        <div className="flex items-end justify-between border-b border-neutral-300 pb-4">
          <span className="text-sm md:text-base">
            dmsquf4061@naver.com
          </span>
          <ArrowUpRight className="w-20 h-20 stroke-[1.25] origin-center" />
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
