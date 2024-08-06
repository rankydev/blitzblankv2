"use client";

import Line from "@/components/line";
import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import FooterShape1 from "@/shapes/footer-s-1";
import FooterShape2 from "@/shapes/footer-s-2";
import FooterShape3 from "@/shapes/footer-s-3";
import Image from "next/image";
import Brush from '@/shapes/lottie/Brush';

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
      } relative z-20 bg-primary after:absolute after:left-0 after:top-0 after:-z-10 after:h-[400px] after:w-full after:bg-[white] after:content-['']`}
    >
      {/* <!-- End Call To Action --> */}
      {children}
      <div
        data-aos="fade-in"
        data-aos-delay="50"
        className={`container relative ${
          !hasCallToAction
            ? "z-40 pt-28 md:pt-40"
            : "z-30 pt-[80px] lg:pt-[130px] "
        }`}
      >

        {/* <!-- End Footer First Row --> */}

        <hr className="h-[1px] border-0 border-b border-light/20 border-opacity-30 bg-transparent" />

        <div className="row gy-5 py-7 text-center lg:g-4 sm:py-14 sm:text-left">
          <div className="sm:col-12 md:col-4 lg:col-3 xl:col-3">
            <Image
              className="mx-auto md:mx-0"
              width={150}
              height={200}
              src="/images/logo/bblweblogo-nobg.png"
              alt="Blitzblank Gebäudereinigung GmbH Logo"
            />
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-4 lg:col-3 xl:col-3">
            <div className="widget pl-0 text-white">
              <h3 className="widget-title">Adresse</h3>
              <ul>
                <li>Blitzblank Gebäudereinigung GmbH</li>
                <li>Max-Haller-Straße 2</li>
                <li>6900 Bregenz</li>
              </ul>
            </div>
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-4 lg:col-4 xl:col-3">
            <div className="widget lg:pl-8">
              <h3 className="widget-title">Email</h3>
              <div className="mx-auto -mt-1 mb-4 w-fit text-[18px] font-normal text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              {/* <!-- End Social Icons --> */}
            </div>
          </div>
          {/* <!-- End Footer Widget --> */}
          <div className="sm:col-6 md:col-6 lg:col-3 xl:col-3">
            <div className="xl:pl-16">
              <h3 className="widget-title">Telefon</h3>
              <div className="mx-auto -mt-1 w-fit text-[18px] font-normal text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <DynamicIcon icon="FaPhone" className="mr-2 inline-block" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className="mx-auto mt-2 w-fit text-[18px] font-normal text-amber-400 transition-all duration-300 hover:underline hover:underline-offset-4 sm:mx-0">
                <DynamicIcon icon="FaMobileScreen" className="mr-2 inline-block" />
                <a href={`tel:${mobile}`}>{mobile}</a>
              </div>
            </div>
          </div>
          {/* <!-- End Footer Widget --> */}
        </div>
        {/* <!-- End Footer First Row --> */}
      </div>
      {/* <!-- End Main Content --> */}

      <Line
        className="line-bg absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 justify-between"
        color="bg-line-dark"
      />

      <div className="absolute bottom-0 left-0 -z-10 h-full w-full">
        <div className="pointer-events-none absolute -right-32 top-[35%] hidden select-none lg:block">
          {/* <FooterShape1 className="text-quaternary" /> */}
          {/* <Brush className="text-quaternary" /> */}
        </div>
        <div className="pointer-events-none absolute bottom-0 hidden select-none lg:block min-[1024px]:left-[-6%] min-[1400px]:left-0">
          {/* <FooterShape2 className="text-quinary" /> */}
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden select-none lg:block">
          {/* <FooterShape3 className="text-secondary" /> */}
        </div>
      </div>
      {/* <!-- End background Lines --> */}
    </footer>
  );
};

export default Footer;
