import User from "./User";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineFilter } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <nav className="flex w-full items-center justify-between bg-gray-2/80 px-5 py-2">
      <FilterBtn />
      <div className="flex justify-center gap-5">
        <User />
        {sessionData ? (
          <button
            className="text-2xl transition hover:text-blue-600"
            onClick={() => void signOut()}
          >
            <FiLogOut />
          </button>
        ) : (
          <button
            className="text-md h-auto rounded-lg bg-blue-800 px-5 py-2 font-h text-white no-underline transition hover:bg-blue-600"
            onClick={() => void signIn()}
          >
            Войти
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const FilterBtn = () => {
  return (
    <button>
      <AiOutlineFilter className="text-2xl" />
    </button>
  );
};
