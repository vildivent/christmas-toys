import { useToysQuery } from "entities/Toy/lib/store";
import User from "../../entities/User/components/User";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineExclamation } from "react-icons/ai";
import { LogoutBtn, SearchBtn, MenuBtn, LoginBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const { setIsOpen } = useFilterCardStore();
  const { query } = useToysQuery();

  return (
    <nav className="flex w-full items-center justify-between bg-gray-2/80 px-5 py-2">
      <div className="flex gap-5">
        <MenuBtn onClick={() => null} />
        {sessionData?.user.role === "Admin" && (
          <div className="flex">
            <SearchBtn onClick={() => setIsOpen((state) => !state)} />
            {query && (
              <AiOutlineExclamation className="translate-x-[-10px] translate-y-[-5px] text-lg text-red-500" />
            )}
          </div>
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
