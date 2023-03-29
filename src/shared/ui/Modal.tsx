import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  padding = true,
  position = "fixed",
}: ModalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  const modalContent = (
    <div
      className={`${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      } ${position} top-0 left-0 z-[1000] flex h-full w-full items-center justify-center transition-opacity duration-200`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`${isOpen ? "scale-100" : "scale-75"} ${
          padding ? "p-10" : "p-0"
        } relative bg-gray-2 shadow-lg transition-all duration-200 md:max-w-[50%]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="hover:text-blue-3 absolute top-5 right-5 cursor-pointer text-3xl transition-transform duration-300 hover:rotate-90"
        >
          <IoClose />
        </button>

        {children}
      </div>
    </div>
  );

  return mounted && ref.current
    ? createPortal(modalContent, ref.current)
    : null;
};

export default Modal;

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  position?: "fixed" | "absolute";
  padding?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
