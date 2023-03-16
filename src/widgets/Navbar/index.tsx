import User from "../../entities/User/components/User";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogoutBtn, SearchBtn, MenuBtn, LoginBtn } from "shared/ui/buttons";

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <nav
      className={`flex w-full items-center bg-gray-2/80 px-5 py-2 ${
        sessionData?.user.role === "Admin" ? "justify-between" : "justify-end"
      }`}
    >
      {sessionData?.user.role === "Admin" && (
        <div className="flex gap-5">
          <MenuBtn onClick={() => null} />
          <SearchBtn onClick={() => null} />
        </div>
      )}

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
