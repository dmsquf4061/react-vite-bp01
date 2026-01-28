import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/vite.svg'

function Gnb() {
    const navItems = [
        { id: "skills", label: "Skills & Tools" },
        { id: "libraries", label: "Libraries" },
        { id: "works", label: "Works" },
        { id: "process", label: "Process" },
        { id: "contact", label: "Contact" },
    ];

    // 클릭된 네비게이션 id
    const [activeId, setActiveId] = useState(null);
    

  return (
    <header className="fixed top-0 left-0 z-20 w-full h-12 md:h-15 bg-[#F2EFEA]/40 backdrop-blur-2xl shadow-[0_4px_12px_rgba(120,115,105,0.12)]">
        <div className="flex justify-center md:justify-between w-full h-full items-center md:px-9">
            {/* 로고 */}
            <div>
                <Link to="/#main"
                    className='flex items-center gap-2 w-21 md:w-41'
                    onClick={() => setActiveId(null)}
                >
                    <img src={logo} alt="로고" />
                </Link>
            </div>
            {/* 네비게이션 */}            
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="flex gap-1 md:gap-6">
                    {navItems.map((item) => {
                        const navActive = activeId === item.id;

                        return (
                            <NavigationMenuItem
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`
                                w-[125px] cursor-pointer transition-colors duration-200 ease-out
                                ${navActive
                                ? "text-[var(--primary)] font-semibold"
                                : "text-[var(--primary-foreground)]"}
                            `}
                            >
                            <NavigationMenuLink href={`#${item.id}`}>
                                {item.label}
                            </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
            
        </div>
    </header>
  )
}

export default Gnb