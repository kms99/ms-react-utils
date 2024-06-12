import { createContext, useContext } from "react";

interface InitialStatesType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const initialStates: InitialStatesType = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

export const modalContext = createContext<InitialStatesType>(initialStates);

export const useModal = () => useContext(modalContext);
