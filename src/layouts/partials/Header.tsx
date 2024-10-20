"use client";

import Line from "@/components/line";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { VscChevronDown } from "react-icons/vsc";

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = ({ backgroundColor }: { backgroundColor: string }) => {
  // distructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { navigation_buttons } = config;
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [isExpand, setExpand] = useState(false);

  useEffect(() => {
    function stickyHeader() {
      const scrollY = window.pageYOffset;
      if (config.settings.sticky_header && scrollY > 0) {
        header.current?.classList.add("header-fixed-top");
        return;
      }
      header.current?.classList.remove("header-fixed-top");
    }
    stickyHeader();
    window.addEventListener("scroll", stickyHeader);

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const onExpandChange = () => {
    setExpand(!isExpand);
  };

  useEffect(() => {
    setExpand(false);
  }, [pathname]);

  return (
    <>
      {/* <!-- End Top Header  --> */}

      <header ref={header} className={`header z-50 ${backgroundColor}`}>
        <nav className="navbar container relative z-30">
          <Link
            href="/"
            className="navbar-brand"
            onClick={() => setExpand(false)}
          >
            <Image
              width={60}
              height={90}
              src="/images/blitzblank-logo.svg"
              alt="Blitzblank Gebäudereinigung Gmbh Logo"
              className="image"
            />
          </Link>
          {/* <!-- End logo --> */}

          {/* style={{ width: "60px", height: "90px" }} */}

          <button
            className={`navbar-toggler group relative ml-auto lg:ml-4 ${isExpand ? "active" : ""}`}
            aria-label="navbar toggler"
            onClick={onExpandChange}
          >
            <div className="relative flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden rounded-full ring-0 transition-all duration-200">
              <div className="flex h-[15px] w-[18px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 group-[.active]:h-[21px]">
                <div className="h-[2px] w-7 origin-left transform bg-dark transition-all duration-300 group-[.active]:translate-x-10"></div>
                <div className="h-[2px] w-7 transform rounded bg-dark transition-all delay-75 duration-300 group-[.active]:translate-x-10"></div>
                <div className="h-[2px] w-7 origin-left transform bg-dark transition-all delay-150 duration-300 group-[.active]:translate-x-10"></div>
                <div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-[.active]:w-12 group-[.active]:translate-x-0">
                  <div className="absolute h-[2px] w-5 rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:rotate-45"></div>
                  <div className="absolute h-[2px] w-5 -rotate-0 transform bg-dark transition-all delay-300 duration-500 group-[.active]:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
          {/* <!-- End Navbar Toggler --> */}

          <div className={`navbar-wrapper ${isExpand ? "active" : ""}`}>
            <ul className="navbar-nav">
              {main.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    {item.hasChildren ? (
                      <li className="nav-item nav-dropdown group">
                        <label htmlFor="expand">
                          <span className="nav-link inline-flex items-center">
                            {item.name} <VscChevronDown />
                          </span>
                        </label>
                        <input
                          className="peer hidden"
                          type="checkbox"
                          id="expand"
                        />
                        <ul className="nav-dropdown-list lg:group-hover:visible lg:group-hover:opacity-100 peer-checked:max-lg:block">
                          {item.children?.map((child, i) => {
                            return (
                              <li key={i} className="nav-dropdown-item">
                                <Link
                                  href={child.url}
                                  className="nav-dropdown-link"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li key={i} className="nav-item">
                        <Link
                          href={item.url}
                          className="nav-link"
                          onClick={onExpandChange}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
            {/* <!-- End Navbar Nav --> */}
          </div>
          {/* <!-- End Navbar Wrapper --> */}
        </nav>
        {/* <!-- End Main Header  --> */}

        {backgroundColor !== "bg-transparent" && (
          <Line className="line-bg absolute z-20" color="bg-line-primary" />
        )}
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Header;
