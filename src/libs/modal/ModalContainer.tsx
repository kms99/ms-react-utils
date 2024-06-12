import React, { PropsWithChildren } from "react";
import * as St from "./modal.styled";
import { BackdropOpacity } from "./modal.type";
import { useModal } from "./modal.context";

interface Props {
  backdrop?: BackdropOpacity;
  closeModalToBackdrop?: boolean;
  isBlur?: boolean;
}

export default function ModalContainer({
  children,
  backdrop = 50,
  closeModalToBackdrop = true,
  isBlur = false,
}: PropsWithChildren<Props>) {
  const convertBackdropOpacity = backdrop / 100;

  const { isOpen, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <St.ModalBackdrop
          $backdrop={convertBackdropOpacity}
          closeModalToBackdrop={closeModalToBackdrop}
          $isBlur={isBlur}
          onClick={closeModalToBackdrop ? closeModal : () => {}}
        >
          {children}
        </St.ModalBackdrop>
      )}
    </>
  );
}
