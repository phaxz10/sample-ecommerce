import Link from "next/link";
import {
  ChevronDownIcon,
  FBIcon,
  IGIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
  YTIcon,
} from "@assets";
import { CartIcon, WishlistIcon } from "@components";
import MobileMenu from "./_components/MobileMenu";

const Header = () => {
  return (
    <section className="header">
      {/* banner - desktip only */}
      <div className="header__banner">
        <div className="header__banner__row">
          <div className="header__banner__row__container">
            <div className="header__banner__row__container__item">
              <PhoneIcon className="header__banner__row__container__item__icon" />
              <span className="header__banner__row__container__item__text">
                (225) 555-0118
              </span>
            </div>

            <div className="header__banner__row__container__item">
              <MailIcon className="header__banner__row__container__item__icon" />
              <span className="header__banner__row__container__item__text">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          <div className="header__banner__row__container">
            <div className="header__banner__row__container__item">
              <span className="header__banner__row__container__item__text">
                Follow Us and get a chance to win 80% off
              </span>
            </div>
          </div>

          <div className="header__banner__row__container">
            <div className="header__banner__row__container__item">
              <span className="header__banner__row__container__item__text">
                Follow Us :
              </span>
            </div>

            <div className="header__banner__row__container__item flex items-center gap-[5.5px]">
              <IGIcon className="header__banner__row__container__item__icon" />
              <YTIcon className="header__banner__row__container__item__icon" />
              <FBIcon className="header__banner__row__container__item__icon" />
              <TwitterIcon className="header__banner__row__container__item__icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="header__navbar">
        <h3 className="header__navbar__brand">
          <Link href="/">Bandage</Link>
        </h3>

        {/* Desktop nav */}
        <div className="header__navbar__desktop">
          <div className="header__navbar__desktop__nav">
            <ul className="gap-[15px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link className="dropdown" href="/">
                  Shop <ChevronDownIcon className="w-[10px] h-[5.7px]" />
                </Link>
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
            </ul>
          </div>

          <div className="header__navbar__desktop__nav header__navbar__desktop__nav__end">
            <ul>
              <li className="right">
                <UserIcon />
                <span>Login/Register</span>
              </li>
              <li className="right">
                <SearchIcon />
              </li>
              <li className="right !font-normal">
                <CartIcon />
              </li>
              <li className="right !font-normal">
                <WishlistIcon />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="header__navbar__mobile">
          <SearchIcon className="header__navbar__mobile__icon" />
          <CartIcon isMobile className="header__navbar__mobile__icon" />
          <MobileMenu className="header__navbar__mobile__icon" />
        </div>
      </div>
    </section>
  );
};

export default Header;
