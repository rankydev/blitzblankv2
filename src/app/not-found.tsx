import ImageFallback from "@/helpers/ImageFallback";
import Base from "@/layouts/Base";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Call_to_action, RegularPage } from "@/types";
import Link from "next/link";

const NotFound = async () => {
  const data: RegularPage = getListPage("pages/404.md");
  const callToAction: Call_to_action = getListPage(
    "sections/call-to-action.md",
  );
  const { image } = data.frontmatter;

  return (
    <Base
      backgroundColor="bg-transparent"
      callToAction={callToAction}
      isNotFoundPage={true}
    >
      <SeoMeta title={"Seite nicht gefunden."} image={"/images/404.png"} />
      <section className="section flex justify-center items-center overflow-hidden">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center sm:col-10 md:col-8 lg:col-6">
              <h1 className="h2">Seite nicht gefunden.</h1>
              <Link href="/" className="btn btn-primary mt-4">
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default NotFound;
