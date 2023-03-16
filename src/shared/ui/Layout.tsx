import { type ReactNode } from "react";
import Navbar from "../../widgets/Navbar";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-[100svh] w-screen">
      <Image className="object-cover" src="/bg.png" alt="Фон" fill />

      <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col gap-2">
        <Navbar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
