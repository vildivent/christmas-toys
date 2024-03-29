import { type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CloseBtn } from "shared/ui/buttons";
import { theme } from "shared/constants";

type SidebarMenuProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const SidebarMenu = ({ sidebarOpen, setSidebarOpen }: SidebarMenuProps) => {
  const navLinks = [
    { id: "/", title: "Игрушки" },
    { id: "/photogallery", title: "Фотогалерея" },
    { id: "/dashboard", title: "Администрирование" },
  ];
  const router = useRouter();
  return (
    <div
      className={`fixed inset-0 z-30 ${
        sidebarOpen ? "h-[100svh] w-[100svw]" : "pointer-events-none h-0 w-0"
      }`}
    >
      <div
        className="z-0 h-full w-full"
        onClick={() => setSidebarOpen(false)}
      />
      <div
        className={`fixed top-1 left-1 z-[1] flex flex-col items-end rounded-lg bg-[#272727] pb-10 shadow-lg transition-all duration-300 ${
          sidebarOpen ? "" : "translate-x-[-20rem]"
        } ${theme.mainColor.tw.border}`}
      >
        <div className="p-2">
          <CloseBtn onClick={() => setSidebarOpen(false)} />
        </div>

        <ul className="flex flex-col">
          {navLinks.map((navLink) => (
            <Link href={navLink.id} key={navLink.id}>
              <li
                className={`${
                  router.pathname === navLink.id
                    ? theme.mainColor.tw.text
                    : "text-white"
                } min-w-[12rem] p-3 hover:bg-gray-1/50`}
              >
                <span className="">{navLink.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
