import BlogCard from "@/components/BlogCard";
import TabContainer from "@/components/TabContainer";
import Line from "@/components/line";
import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CounterWrapper from "@/partials/Counter-Wrapper";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import AboutShape1 from "@/shapes/about-s-1";
import {
  Blogs,
  Button,
  Feature,
  Post,
  Process,
  Projects,
  Testimonial,
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import BannerShape from "../../shapes/banner-s-1";
import BannerShape2 from "../../shapes/banner-s-2";
import { BsCheckLg } from "react-icons/bs";
import BlogShape1 from "../../shapes/blog-s-1";
import FeatureShape1 from "../../shapes/feature-s-1";
import FeatureShape2 from "../../shapes/feature-s-2";
const { blog_folder } = config.settings;
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const homepage = getListPage("_index.md");
  const posts: Post[] = getSinglePage(blog_folder);
  const testimonial: Testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const {
    banner,
    brands,
    features,
    projects,
    process,
    feature_post,
    blogs,
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
    blogs: Blogs;
  } = frontmatter;
  const { images, support, facility } = banner || {};

  return (
    <>
      <SeoMeta {...frontmatter} />
      <section className="section banner relative overflow-hidden before:z-10 after:z-10">
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
              >Kontaktieren Sie uns</a>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-20">
                {facility.map((text, i) => {
                  return (
                    <li
                      key={i}
                      data-aos="fade-in"
                      data-aos-delay={100 + i * 50}
                    >
                      <BsCheckLg className="mr-2 inline-block text-2xl text-secondary" />
                      <p className="inline-block align-middle text-lg font-medium text-primary">
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
        {/* <Line className="line-bg absolute z-20" color="bg-line-yellow" /> */}
        {/* <!-- End background lines --> */}
      </section>
      {/* <!-- End Banner Section --> */}

      <section className="md:section">
        <div className="shadow-default relative z-20 mx-3 max-w-[1440px] rounded-xl bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
          <div className="container">
          <span>hier evtl kundenlogos oder namen...</span>
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
            <div
              className="col-auto"
              data-aos="fade-right-sm"
              data-aos-delay="150"
            >
              <Link
                aria-disabled={!features.button.enable}
                className="btn btn-outline-primary btn-sm"
                href={features.button.link}
              >
                {features.button.label}
              </Link>
            </div>
          </div>
          <div className="colored-box-icon row gy-4">
            {features.list.map((feature, i) => {
              const { title, icon, description } = feature;
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${200 + i * 50}`}
                  className="md:col-6 lg:col-4 xl:col-3"
                >
                  <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm">
                    <div className="icon-box">
                      <DynamicIcon icon={icon} />
                    </div>
                    <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <!-- Start Bg Shape --> */}
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute top-0 hidden select-none min-[1440px]:block"
        >
          <FeatureShape1 className="text-quaternary" />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"
        >
          <FeatureShape2 className="text-secondary" />
        </div>
        {/* <!-- End Bg Shape --> */}
        <Line className="line-bg absolute z-20" color="bg-line-primary" />
      </section>

      <TabContainer {...process} />
      <CounterWrapper {...projects} />
      {/* <!-- End Showcase Section --> */}

      
      {/* <!-- End Feature Section --> */}

      {/* <Testimonials data={testimonial} /> */}

      <section className="section-md articles relative z-20 overflow-hidden after:-z-10">
        <div data-aos="fade-up-sm" className="row pb-12 text-center">
          <div className="mx-auto lg:col-8 bg-white rounded-2xl shadow-default px-12 py-10 sm:py-14 md:flex-row md:gap-0 list-dotted-line-separator">
            <div className="adsf">Wir stellen ein</div>
            <div className="adsf">Lust auf eine neue Herausforderung?</div>
            <div className="adsf"></div>
          </div>
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
        >
          <BlogShape1 className="text-quinary" />
        </div>
        {/* <!-- End Bg Shape --> */}
        <Line className="line-bg absolute z-20" color="bg-line-sky" />
        {/* <!-- End background lines --> */}
      </section>
      <section className="pt-[150px]"></section>
      {/* <!-- End Articles Section --> */}
    </>
  );
};

export default Home;
