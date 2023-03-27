import { type ReactNode } from "react";
import Navbar from "../../widgets/Navbar";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="fixed inset-0 h-[100svh] w-screen">
      <Image className="object-cover" src="/bg.png" alt="Фон" fill />

      <div className="fixed inset-0 flex flex-col gap-2">
        <Navbar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
