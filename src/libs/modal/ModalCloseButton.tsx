import React, { ComponentProps, PropsWithChildren } from "react";
import { useModal } from "./modal.context";

interface Props extends ComponentProps<"button"> {}

export default function ModalCloseButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const { closeModal } = useModal();
  return (
    <button {...props} onClick={closeModal}>
      {children}
    </button>
  );
}
