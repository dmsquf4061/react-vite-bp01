function SectionContact() {
  return (
    <section 
      id="contact" 
      className="relative w-full h-screen"
    >
      {/* 메인 타이틀 */}
      <div className="flex justify-center md:justify-start items-center md:items-start w-full h-auto md:h-full">
        <h1 className="md:absolute md:left-20 md:top-60 flex flex-col font-extrabold leading-none text-5xl md:text-7xl md:text-left">
          <span>Let’s work</span>
          <span>together</span>
        </h1>
      </div>
    </section>
  )
}

export default SectionContact