import React, { useMemo, forwardRef, useRef, useEffect } from "react";

interface ModalProps {
  showModal: boolean;
  renderModalContent: JSX.Element | null | undefined;
  toggleModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  { showModal, renderModalContent, toggleModal },
  ref
) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      showModal
    ) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return useMemo(() => {
    if (!showModal) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div
          ref={modalRef}
          className="bg-white p-8 rounded-lg fadeIn035 h-[25rem] w-[18rem]"
        >
          <h2 className="mb-4 text-xl font-semibold">Edit Profile</h2>
          {renderModalContent}
        </div>
      </div>
    );
  }, [showModal, renderModalContent]);
};

export default forwardRef<HTMLDivElement, ModalProps>(Modal);
