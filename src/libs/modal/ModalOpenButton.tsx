import React, { ComponentProps, PropsWithChildren } from "react";
import { useModal } from "./modal.context";

interface Props extends ComponentProps<"button"> {}

export default function ModalOpenButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const { openModal } = useModal();
  return (
    <button {...props} onClick={openModal}>
      {children}
    </button>
  );
}
