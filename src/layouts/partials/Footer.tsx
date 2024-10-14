"use client";

import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import Image from "next/image";
import Link from "next/link";

const Footer = ({
  children,
  hasCallToAction,
}: {
  children?: React.ReactNode;
  hasCallToAction: boolean;
}) => {
  const { email, phone, mobile } = config.contact;

  return (
    <footer
      className={`${
        !hasCallToAction ? "footer-alt" : ""
      } relative z-20 bg-white after:absolute after:left-0 after:top-0 after:-z-10`}
    >
      {/* <!-- End Call To Action --> */}
      {children}
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className={`container relative ${
          !hasCallToAction
            ? "z-40 pt-28 pd:mt-40"
            : "z-30 pt-[80px] pg:mt-[130px] "
        }`}
      >
        {/* <!-- End Footer First Row --> */}

        <div className="row gy-3 py-7 text-center lg:g-4 lg:pb-8 sm:py-14 sm:text-left">
          <div className="sm:col-12 md:col-4 lg:col-3 xl:col-3">
            <Image
              className="mx-auto md:mx-0"
              width={150}
              height={200}
              src="/images/logo/bblweblogo-nobg-blue.png"
              alt="blitzblank Gebäudereinigung GmbH Logo"
            />
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-4 lg:col-3 xl:col-3">
            <div className="widget pl-0 text-primary">
              <h3 className="widget-title">Adresse</h3>
              <ul>
                <li>blitzblank Gebäudereinigung GmbH</li>
                <li>Max-Haller-Straße 2</li>
                <li>6900 Bregenz</li>
              </ul>
            </div>
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-4 lg:col-3 xl:col-3">
            <div className="widget lg:pl-8">
              <h3 className="widget-title">Email</h3>
              <div className="mx-auto -mt-1 mb-4 w-fit text-[18px] font-bold text-primary transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              {/* <!-- End Social Icons --> */}
            </div>
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-6 lg:col-3 xl:col-3">
            <div className="xl:pl-16">
              <h3 className="widget-title">Telefon</h3>
              <div className="mx-auto -mt-1 w-fit text-[18px] font-bold text-primary transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <DynamicIcon icon="FaPhone" className="mr-2 inline-block" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className="mx-auto mt-2 w-fit text-[18px] font-bold text-primary transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <DynamicIcon
                  icon="FaMobileScreen"
                  className="mr-2 inline-block"
                />
                <a href={`tel:${mobile}`}>{mobile}</a>
              </div>
            </div>
          </div>

          {/* <!-- End Footer Widget --> */}
          <hr className="h-[1px] border-0 border-b border-opacity-30 bg-primary" />
          <div className="flex w-full justify-center sm:justify-end gap-4">
            <Link
              className="font-medium underline underline-offset-2 hover:no-underline"
              href="datenschutz-impressum"
            >
              Datenschutz & Impressum
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- End Main Content --> */}
    </footer>
  );
};

export default Footer;
