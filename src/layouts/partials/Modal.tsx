"use client";

import { useModal } from "@/hooks/useModal"; // Adjust the path as needed
import DynamicIcon from "@/helpers/DynamicIcon";
import Image from "next/image";

const Modal = () => {
  const { currentModal, closeModal } = useModal();

  console.log("opened", currentModal);

  if (!currentModal.isOpen) {
    return null; // Do not render anything if the modal is not open
  }

  const { modalContent } = currentModal;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.2)]"
        onClick={closeModal}
      />
      <div
        className="absolute w-full bg-transparent opacity-90 z-[51] pr-6"
        data-aos="fade-down"
      >
        <div className="w-full bg-white border rounded-xl border-primary shadow-xl flex flex-col lg:flex-row p-4">
          <div className="col-12 lg:col-6 pt-12 lg:p-12 order-2 lg:order-1">
            <h3 className="text-secondary lg:pb-4">{modalContent.title}</h3>
            <p className="text-dark py-4 leading-12 text-lg">
              {modalContent.description}
            </p>
          </div>

          <div className="col-12 lg:col-6 relative order-1 lg:order-2">
            <Image
              width={700}
              height={400}
              style={{ filter: "brightness(0.7)" }}
              className="banner-image w-100 h-full relative object-cover"
              src={`/images/features/${modalContent.image}`}
              alt="banner-image"
            />
            <span className="text-white text-2xl flex justify-end p-4 w-full absolute top-0">
              <DynamicIcon
                icon="FaX"
                className="cursor-pointer opacity-80 hover:opacity-100"
                onClick={closeModal}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
