import User from "../../entities/User/components/User";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogoutBtn, SearchBtn, MenuBtn, LoginBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const { setIsOpen } = useFilterCardStore();

  return (
    <nav
      className={`flex w-full items-center bg-gray-2/80 px-5 py-2 ${
        sessionData?.user.role === "Admin" ? "justify-between" : "justify-end"
      }`}
    >
      <div className="flex gap-5">
        <MenuBtn onClick={() => null} />
        {sessionData?.user.role === "Admin" && (
          <SearchBtn onClick={() => setIsOpen((state) => !state)} />
        )}
      </div>

      <div className="flex justify-center gap-5">
        <User />
        {sessionData ? (
          <LogoutBtn onClick={() => void signOut()} />
        ) : (
          <LoginBtn onClick={() => void signIn()} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
