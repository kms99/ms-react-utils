import React, { PropsWithChildren, useState } from "react";
import { modalContext } from "./modal.context";

export default function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const values = { isOpen, openModal, closeModal };

  return (
    <modalContext.Provider value={values}>{children}</modalContext.Provider>
  );
}
