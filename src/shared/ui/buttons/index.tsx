import { type MouseEventHandler, useState, type ReactNode } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { theme } from "shared/constants";

const outlineBtnStyle = `text-2xl transition ${theme.mainColor.tw.hover.text}`;
const loginBtnStyle = `text-md h-auto rounded-lg ${theme.secondaryColor.tw.bg} px-5 py-2 font-h text-white no-underline transition ${theme.mainColor.tw.hover.bg}`;

export const AddBtn = ({
  onClick,
  size = "4rem",
  title = "Добавить",
  titleClassName = "font-h text-xl transition",
  disabled,
  className,
}: AddBtnProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={
        className
          ? className
          : "flex flex-col items-center justify-center gap-5"
      }
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      disabled={disabled}
    >
      <div
        className={`flex items-center justify-center rounded-lg border transition ${
          hovered ? "border-green-600" : ""
        }`}
        style={{ width: size, height: size }}
      >
        <Plus size={32} hovered={hovered} color="rgb(22 163 74)" />
      </div>
      <span className={`${titleClassName} ${hovered ? "text-green-600" : ""}`}>
        {title}
      </span>
    </button>
  );
};

export const CloseBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineClose />
    </button>
  );
};

export const CheckBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineCheck />
    </button>
  );
};

export const DeleteBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineDelete />
    </button>
  );
};

export const EditBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineEdit />
    </button>
  );
};

export const LoginBtn = ({
  onClick,
  className = loginBtnStyle,
  disabled,
  children = "Войти",
}: BtnProps & { children?: ReactNode }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export const LogoutBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <FiLogOut />
    </button>
  );
};

export const MenuBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineMenu />
    </button>
  );
};

export const NextArrowBtn = ({
  onClick,
  isLast = false,
  className = outlineBtnStyle,
  disabled,
}: NextArrowBtnProps) => {
  return (
    <button
      className={`${isLast ? "pointer-events-none text-transparent" : ""} ${
        className ?? ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <MdOutlineNavigateNext />
    </button>
  );
};

export const PrevArrowBtn = ({
  onClick,
  isFirst = false,
  className = outlineBtnStyle,

  disabled,
}: PrevArrowBtnProps) => {
  return (
    <button
      className={`${isFirst ? "pointer-events-none text-transparent" : ""} ${
        className ?? ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <MdOutlineNavigateBefore />
    </button>
  );
};

export const SearchBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <AiOutlineSearch />
    </button>
  );
};

type BtnProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

type AddBtnProps = BtnProps & {
  size?: number | string;
  title?: string;
  titleClassName?: string;
};

type NextArrowBtnProps = BtnProps & {
  isLast?: boolean;
};

type PrevArrowBtnProps = BtnProps & {
  isFirst?: boolean;
};

type PlusProps = {
  size: number | string;
  thickness?: number;
  hovered?: boolean;
  color?: string;
};

function Plus({
  size,
  thickness = 2,
  hovered,
  color = "rgb(37 99 235)",
}: PlusProps) {
  return (
    <div
      className={`bg-white transition`}
      style={{
        width: size,
        height: size,
        backgroundColor: `${hovered ? color : "white"}`,
        clipPath: `
           polygon(0% calc(50% - ${thickness / 2}px), 
           calc(50% - ${thickness / 2}px) calc(50% - ${thickness / 2}px), 
           calc(50% - ${thickness / 2}px) 0, 
           calc(50% + ${thickness / 2}px) 0, 
           calc(50% + ${thickness / 2}px) calc(50% - ${thickness / 2}px), 
           100% calc(50% - ${thickness / 2}px), 
           100% calc(50% + ${thickness / 2}px), 
           calc(50% + ${thickness / 2}px) calc(50% + ${thickness / 2}px), 
           calc(50% + ${thickness / 2}px) 100%, 
           calc(50% - ${thickness / 2}px) 100%, 
           calc(50% - ${thickness / 2}px) calc(50% + ${thickness / 2}px), 
           0 calc(50% + ${thickness / 2}px) 
           `,
      }}
    />
  );
}
