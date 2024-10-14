import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import { Call_to_action } from "@/types";

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
    // <>
    <div className={isNotFoundPage ? 'not-found' : ''}>
      <Header backgroundColor={backgroundColor} />
      <main>{children}</main>
      {callToAction && (
        <Footer hasCallToAction={isNotFoundPage ? !isNotFoundPage : !!callToAction}/>
      )}
    {/* </> */}
    </div>
  );
};

export default Base;


