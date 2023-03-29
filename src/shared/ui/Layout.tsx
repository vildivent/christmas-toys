import { type ReactNode } from "react";
import Navbar from "../../widgets/Navbar";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="fixed inset-0 h-[100svh] w-screen landscape:hidden landscape:lg:block">
        <Image className="object-cover" src="/bg.png" alt="Фон" fill />

        <div className="fixed inset-0 flex flex-col gap-2">
          <Navbar />
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
