function SectionMain() {
  return (
    <section
      id="main"
      className="relative w-full h-screen px-10 md:px-20 bg-[#F2EFEA]"
    >
      {/* 메인 타이틀 */}
      <div className="flex justify-center md:justify-start items-center md:items-start w-fuull h-[50%] md:h-full">
        <h1 className="absolute flex flex-col md:gap-2 md:left-20 md:top-40 font-extrabold leading-none text-7xl md:text-[205px] md:text-left">
          <span>BASIC TO</span>
          <span>BASIC</span>
        </h1>
      </div>

      {/* 자기소개 */}
      <div className="absolute left-10 md:left-20 bottom-10 md:bottom-20">
        <div className="flex flex-col gap-1 md:gap-2 text-left text-xl leading-none">
          <p>BASIC TO</p>
          <p>BASIC</p>
          <p>BASIC</p>
          <p>BASIC</p>
        </div>
      </div>

      {/* 타이핑 이미지 */}
      <div className="absolute right-10 md:right-20 bottom-10 md:bottom-20 bg-stone-900 w-[calc(100%-80px)] h-100 md:w-200 md:h-100">
        
      </div>
    </section>
  );
}

export default SectionMain;
