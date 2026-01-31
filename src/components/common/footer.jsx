function Footer() {
  return (
    <footer className="border-t border-[var(--muted-foreground)] text-sm">
      <div className="py-10 px-4 sm:px-10 md:px-20">
        {/* 상단 */}
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row items-center md:items-start md:justify-between">
          {/* 로고 + 소개 */}
          <div className="max-w-sm md:text-left">
            <div className="text-lg font-bold text-[var(--primary-foreground)]">
              The B
            </div>

            <p className="text-[var(--muted-foreground)]">
              Web Publisher focused on clean UI implementation and
              responsive web experiences.
            </p>
          </div>

          {/* 메뉴 */}
          <nav className="flex gap-5 md:gap-10 text-xs text-[var(--primary-foreground)]">
            <a href="#about" className="transition-colors hover:text-[var(--primary)]">
              About 
            </a>
            <span>|</span>
            <a href="#works" className="transition-colors hover:text-[var(--primary)]">
              Works
            </a>
            <span>|</span>
            <a href="#process" className="transition-colors hover:text-[var(--primary)]">
              Process
            </a>
            <span>|</span>
            <a
              href="mailto:dmsquf4061@naver.com"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* 하단 */}
        <div className="mt-5 md:mt-12 text-xs text-[var(--muted-foreground)] md:text-left">
          © {new Date().getFullYear()} The B. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
