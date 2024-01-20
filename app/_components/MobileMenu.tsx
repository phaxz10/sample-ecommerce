"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerIcon, SearchIcon, UserIcon } from "@assets";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";

type Props = {
  className?: string;
};

const MobileMenu = ({ className }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsMenuVisible(entry.isIntersecting);
    });

    if (menuRef.current) observer.observe(menuRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isMenuVisible) {
      setIsOpen(false);
    }
  }, [isMenuVisible]);

  return (
    <>
      <button
        aria-label="toggle cart button"
        className="relative"
        type="button"
        onClick={onButtonClick}
      >
        <HamburgerIcon className={className} />
      </button>

      <div
        ref={menuRef}
        className={`noScrollbar pb-10 transition-all duration-300 ease-in-out xl:hidden fixed top-0 left-0 w-screen h-screen overflow-y-scroll bg-white z-50 ${
          !isOpen
            ? "opacity-0 pointer-events-none transition-opacity delay-300 translate-x-full"
            : ""
        }`}
      >
        <div className="header__navbar">
          <h3 className="header__navbar__brand">
            <Link href="/">Bandage</Link>
          </h3>
          <div className="header__navbar__mobile">
            <button
              aria-label="toggle cart button"
              className="relative"
              type="button"
              onClick={onButtonClick}
            >
              <HamburgerIcon className={className} />
            </button>
          </div>
        </div>
        <ul className="p-6 flex items-center flex-col gap-[30px] [&>li]:text-secondary-text [&>li]:text-[30px]">
          <li className="!text-primary-text">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li className="flex items-center gap-2 !text-primary">
            <UserIcon className="w-7 h-7" />
            <span>Login/Register</span>
          </li>
          <li className="!text-primary">
            <SearchIcon className="w-7 h-7" />
          </li>
          <li className="!text-primary !font-normal flex items-center gap-2 [&>span]:text-sm">
            <CartIcon className="w-7 h-7" />
          </li>
          <li className="!text-primary !font-normal flex items-center gap-2 [&>span]:text-sm">
            <WishlistIcon className="w-7 h-7" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
