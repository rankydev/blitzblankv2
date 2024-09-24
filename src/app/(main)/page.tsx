import DynamicIcon from "@/helpers/DynamicIcon";
import Line from "@/components/line";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CounterWrapper from "@/partials/Counter-Wrapper";
import SeoMeta from "@/partials/SeoMeta";
import AboutShape1 from "@/shapes/about-s-1";
import { Button, Feature, Process, Projects } from "@/types";
import Image from "next/image";
import Services from "@/components/Services";
import Brush from "@/shapes/lottie/Brush";
import Spray from "@/shapes/lottie/Spray";

const Home = () => {
  const homepage = getListPage("_index.md");
  const { frontmatter } = homepage;
  const {
    banner,
    brands,
    features,
    projects,
  }: {
    banner: {
      title: string;
      images: {
        left: string;
        main: string;
        right: string;
      };
      support: {
        title: string;
        list: { icon: string; link: string }[];
      };
      facility: string[];
      content?: string;
      button?: Button;
    };
    brands: { source: string }[];
    feature_post: {
      title: string;
      subtitle: string;
      description: string;
      image: string;
    }[];
    features: Feature;
    process: Process;
    projects: Projects;
  } = frontmatter;
  const { facility } = banner || {};

  return (
    <>
      <SeoMeta {...frontmatter} />
      <section className="section bg-image relative overflow-hidden before:z-10 after:z-10 pb-[550px]">
        <div className="container relative z-30">
          <div className="row items-center">
            <div className="lg:col-12 text-center">
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-[35px] sm:text-[50px] lg:max-w-[1000px] lg:text-[58px] mx-auto"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              ></h1>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="mb-6 text-lg lg:max-w-[600px] mx-auto"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              ></p>

              <a
                data-aos="fade-up-sm"
                href="#kontakt"
                className="btn btn-primary btn-lg "
              >
                Kontaktieren Sie uns
              </a>

              <ul className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 justify-center mt-20">
                {facility.map((text, i) => {
                  return (
                    <li
                      key={i}
                      data-aos="fade-in"
                      data-aos-delay={100 + i * 100}
                    >
                      <p className="inline-block align-middle text-base lg:text-lg font-medium text-primary">
                        <DynamicIcon
                          icon="FaCheck"
                          className="mr-2 inline-block text-amber-500"
                        />
                        {text}
                      </p>
                    </li>
                  );
                })}
              </ul>

              {/* End Hero Section */}
            </div>
          </div>
        </div>
        {/* <!-- End Main Content --> */}
        {/* <!-- End background lines --> */}
      </section>
      {/* <!-- End Banner Section --> */}

      {/* <section className="md:section">
        <div className="shadow-default relative z-20 mx-3 max-w-[1440px] rounded-xl bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
          <div className="container">
            <div className="row justify-center">
              {brands.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="col-5 sm:col-3 lg:col-2"
                    data-aos="fade-up-sm"
                    data-aos-delay={`${150 + 50 * i}`}
                  >
                    <Image
                      width={169}
                      height={92}
                      src={item.source}
                      alt="brand logo"
                      className="inline-block py-4 sm:mx-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      <section className="md:section">
        <div className="shadow-default relative z-20 mx-3 max-w-[1440px] rounded-xl bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
          <div className="container">
            <div className="row justify-center gap-8">
              {brands.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="col-5 sm:col-3 lg:col-2 flex justify-center items-center"
                    data-aos="fade-up-sm"
                    data-aos-delay={`${150 + 50 * i}`}
                  >
                    <div className="brand-logo-container">
                      <Image
                        src={item.source}
                        alt="brand logo"
                        className="brand-logo"
                        layout="fill" // This ensures the logo fills the container
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Brands Section --> */}

      <section className="section features relative z-20 overflow-hidden after:-z-10">
        <div className="container relative z-30">
          <div className="row items-end justify-between pb-12">
            <div className="lg:col-8 xl:col-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {features.subtitle}
              </span>
              <div
                className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0"
                data-aos="fade-up-sm"
              >
                <h2
                  className="mb-6 font-semibold"
                  data-aos="fade-up-sm"
                  data-aos-delay="50"
                >
                  {features.title}
                </h2>
                <p
                  className="text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {features.description}
                </p>
              </div>
            </div>
          </div>
          <Services features={features} />
        </div>

        {/* <!-- Start Bg Shape --> */}
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute top-0 -left-32 hidden select-none min-[1440px]:block"
        >
          <Spray />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute -right-32 top-[470px] hidden select-none lg:block w-[400px]"
        >
          <Brush />
        </div>
        {/* <!-- End Bg Shape --> */}
        <Line className="line-bg absolute z-20" color="bg-line-primary" />
      </section>

      <CounterWrapper {...projects} />
      {/* <!-- End Showcase Section --> */}
      {/* <!-- End Feature Section --> */}

      <section className="section-md jobs relative z-20 overflow-hidden after:-z-10 pb-0 mb-[-48px]">
        <div data-aos="fade-up-sm" className="container pb-12 lg:w-1/2 mx-auto">
          <h2 className="mb-6 text-4xl font-semibold text-white">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="mb-8 text-white text-xl leading-9">
            Wir sind stets auf der Suche nach engagierten und erfahrenen
            Teammitgliedern in den Bereichen{" "}
            <span className="text-secondary font-bold">Raumpflege</span> und{" "}
            <span className="text-secondary font-bold">Gebäudereinigung</span>.
          </p>
          <p className="text-white text-xl leading-9">
            Wenn Sie Interesse daran haben, in einem{" "}
            <span className="underline">dynamischen</span> und{" "}
            <span className="underline">freundlichen</span> Umfeld zu arbeiten,
            senden Sie uns gerne Ihre Bewerbungsunterlagen per Mail zu.
          </p>
        </div>
        {/* <!-- Start Bg Shape --> */}
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute -left-24 bottom-0 hidden select-none lg:block"
        >
          <AboutShape1 className="text-secondary" />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"
        ></div>
        {/* <!-- End Bg Shape --> */}
        {/* <!-- End background lines --> */}
      </section>
      {/* <!-- End Articles Section --> */}
    </>
  );
};

export default Home;
