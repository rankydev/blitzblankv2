import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import ContactShape1 from "@/shapes/contact-s-1";
import ContactShape2 from "@/shapes/contact-s-2";
import { RegularPage } from "@/types";
import ContactForm from '@/components/ContactForm';

const Contact = async () => {
  const data: RegularPage = getListPage("contact/index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image, supports } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <ContactForm />
    </>
  );
};

export default Contact;
