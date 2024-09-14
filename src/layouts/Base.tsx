import CallToAction from "@/partials/CallToAction";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Modal from "@/partials/Modal";
import { Call_to_action } from "@/types";
import ContactForm from "@/components/ContactForm";

const Base = ({
  backgroundColor = "bg-quaternary/20",
  children,
  callToAction,
  isNotFoundPage,
}: {
  backgroundColor: string;
  callToAction?: Call_to_action;
  children: React.ReactNode;
  isNotFoundPage?: boolean;
}) => {
  return (
    <>
      <Header backgroundColor={backgroundColor} />
      <Modal />
      <main>{children}</main>
      {callToAction && (
        <Footer
          hasCallToAction={isNotFoundPage ? !isNotFoundPage : !!callToAction}
        >
          {!isNotFoundPage && <ContactForm />}
        </Footer>
      )}
    </>
  );
};

export default Base;
