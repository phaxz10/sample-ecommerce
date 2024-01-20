import Link from "next/link";
import { FBIcon, IGIcon, TwitterIcon } from "@assets";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__row">
        <div className="footer__row__brand">Bandage</div>

        <div className="footer__row__socials">
          <FBIcon className="footer__row__socials__icon" />
          <IGIcon className="footer__row__socials__icon" />
          <TwitterIcon className="footer__row__socials__icon" />
        </div>
      </div>

      <hr />

      <div className="footer__container">
        <div className="footer__container__row">
          <div className="footer__container__row__column">
            <h4 className="footer__container__row__column__title">
              Company Info
            </h4>

            <div className="footer__container__row__column__links">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">We are hiring</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>

          <div className="footer__container__row__column">
            <h4 className="footer__container__row__column__title">Legal</h4>

            <div className="footer__container__row__column__links">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">We are hiring</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>

          <div className="footer__container__row__column">
            <h4 className="footer__container__row__column__title">Features</h4>

            <div className="footer__container__row__column__links">
              <Link href="/">Bussiness Marketing</Link>
              <Link href="/">User Analytic</Link>
              <Link href="/">Live Chat</Link>
              <Link href="/">Unlimited Support</Link>
            </div>
          </div>

          <div className="footer__container__row__column">
            <h4 className="footer__container__row__column__title">Resources</h4>

            <div className="footer__container__row__column__links">
              <Link href="/">IOS & Android</Link>
              <Link href="/">Watch a Demo</Link>
              <Link href="/">Customers</Link>
              <Link href="/">API</Link>
            </div>
          </div>

          <div className="footer__container__row__column lg:flex-[18%]">
            <h4 className="footer__container__row__column__title">
              Get in Touch
            </h4>

            <form className="w-full max-w-[321px]">
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full text-secondary-text text-sm border rounded-md rounded-r-none border-r-0 py-[15px] pl-[22.5px]"
                  placeholder="Your Email"
                />
                <button
                  type="button"
                  aria-label="subscribe button"
                  className="text-sm text-white bg-primary rounded-r-md py-[15px] px-[22.5px]"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-secondary-text">
                Lore imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="py-[25px]">
        <p className="font-bold text-sm text-center md:text-left text-secondary-text">
          Made With Love By Finland All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
