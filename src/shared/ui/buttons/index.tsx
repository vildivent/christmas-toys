import { type MouseEventHandler, useState, type ReactNode } from "react";
import {
  AiFillStar,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {
  MdOutlineHideImage,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { RiFilterOffLine } from "react-icons/ri";
import { theme } from "shared/constants";

const outlineBtnStyle = `text-2xl transition p-2 ${theme.mainColor.tw.hover.text}`;
const colorBtnStyle = `text-md h-auto rounded-lg px-5 py-2 font-h no-underline transition`;
const loginBtnStyle = `${colorBtnStyle} ${theme.secondaryColor.tw.bg} ${theme.mainColor.tw.hover.bg}`;

export const AddBtn = ({
  onClick,
  size = "4rem",
  title = "Добавить",
  titleClassName = "font-h text-2xl transition",
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
          hovered ? theme.mainColor.tw.border : ""
        }`}
        style={{ width: size, height: size }}
      >
        <Plus size={32} hovered={hovered} color={theme.mainColor.rgb} />
      </div>
      <span
        className={`${titleClassName} ${
          hovered ? theme.mainColor.tw.text : ""
        }`}
      >
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

export const DeleteImgBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <MdOutlineHideImage />
    </button>
  );
};

export const SetMainImgBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
  isMain,
}: BtnProps & { isMain: boolean }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {isMain ? <AiFillStar /> : <AiOutlineStar />}
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

export const ClearFilterBtn = ({
  onClick,
  className = outlineBtnStyle,
  disabled,
}: BtnProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      <RiFilterOffLine />
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

export const RedBtn = ({
  onClick,
  className = `${colorBtnStyle} bg-red-600 hover:bg-red-500`,
  disabled,
  children = "Нет",
}: BtnProps & { children?: ReactNode }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export const WhiteBtn = ({
  onClick,
  className = `${colorBtnStyle} bg-white hover:bg-gray-300 text-black`,
  disabled,
  children = "Нет",
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
