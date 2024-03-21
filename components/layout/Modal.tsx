import React, { useMemo } from "react";

interface ModalProps {
  showModal: boolean;
  renderModalContent: JSX.Element | null;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, renderModalContent }) => {
  return useMemo(() => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-lg fadeIn035">
          <h2 className="mb-4 text-xl font-semibold">Edit Profile</h2>
          {renderModalContent}
        </div>
      </div>
    );
  }, [showModal, renderModalContent]);
};

export default Modal;
