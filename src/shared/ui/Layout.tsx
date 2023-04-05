import { type ReactNode, useState } from "react";
import Navbar from "../../widgets/Navbar";
import Image from "next/image";
import SidebarMenu from "widgets/SidebarMenu";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div
        className="fixed inset-0 h-[100svh] w-full overflow-hidden landscape:hidden landscape:lg:block"
        style={{ overflowY: "hidden" }}
      >
        <Image className="object-cover" src="/bg.jpg" alt="Фон" fill priority />

        <div className="fixed inset-0 flex flex-col gap-1">
          <Navbar setSidebarOpen={setSidebarOpen} />
          <SidebarMenu
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="relative flex-1">{children}</div>
        </div>
      </div>
      <div className="flex h-[100svh] w-screen items-center justify-center portrait:hidden landscape:lg:hidden">
        <h1 className="text-3xl">Пожалуста, поверните телефон</h1>
        <Image src="/rotate.gif" alt="rotate" width={80} height={80} />
      </div>
    </>
  );
};

export default Layout;
