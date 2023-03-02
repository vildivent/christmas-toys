import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen text-white">
      <Image className="z-0 object-cover" src="/bg.png" alt="Фон" fill />

      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1] flex flex-col gap-2">
        <Navbar />
        <div className="relative flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
