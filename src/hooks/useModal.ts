import { useState, useCallback, useMemo, useEffect, use } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (index: number, content: any) => {
    setCurrentIndex(index); // Set the current index
    setModalContent(content); // Set the content
    setIsOpen(true); // Set modal to open
    console.log("hook", { isOpen, currentIndex, modalContent });
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
    setCurrentIndex(null); // Reset the current index
    setModalContent(null); // Reset the modal content
  };

  return {
    currentModal: { isOpen, currentIndex, modalContent }, // Return the state object
    openModal, // Expose the openModal function
    closeModal, // Expose the closeModal function
  };
};
