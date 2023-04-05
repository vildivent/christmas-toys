import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { useToysNumberStore, useToysQueryStore } from "entities/Toy/lib/store";
import CurrentUser from "../../entities/User/components/CurrentUser";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineExclamation } from "react-icons/ai";
import { LogoutBtn, SearchBtn, MenuBtn, LoginBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";
import { type ToyQuery } from "entities/Toy/types";
import { useRouter } from "next/router";
import Link from "next/link";

type NavbarProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ setSidebarOpen }: NavbarProps) => {
  const { data: sessionData } = useSession();
  const { pathname } = useRouter();
  const { setIsOpen } = useFilterCardStore();
  const { query } = useToysQueryStore();
  const { toysNumber } = useToysNumberStore();
  const filerIsOn = useFilterIsOn(query);

  const isAdmin = sessionData?.user.role === "ADMIN";
  const isUser = sessionData?.user.role === "USER";

  return (
    <nav className="flex w-full items-center justify-between bg-gray-2/80 px-2 py-2 md:px-5">
      <div className="flex gap-2">
        {isAdmin && (
          <MenuBtn onClick={() => setSidebarOpen((value) => !value)} />
        )}
        {(isAdmin || isUser) && pathname === "/" && (
          <div className="relative flex items-center gap-4">
            <SearchBtn onClick={() => setIsOpen((state) => !state)} />

            <AiOutlineExclamation
              className={`absolute top-1 left-6 text-lg text-red-500 ${
                filerIsOn ? "" : "opacity-0"
              }`}
            />
            <div className="text-lg">{toysNumber || 0}</div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {sessionData?.user.role === "ADMIN" ? (
          <Link href="/dashboard">
            <CurrentUser />
          </Link>
        ) : (
          <CurrentUser />
        )}

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

const useFilterIsOn = (query: ToyQuery | null) => {
  const [filterIsOn, setFilterIsOn] = useState(false);
  useEffect(() => {
    if (
      query?.box ||
      query?.category ||
      query?.dates ||
      query?.material ||
      query?.q ||
      query?.type
    ) {
      setFilterIsOn(true);
    } else setFilterIsOn(false);
  }, [query]);
  return filterIsOn;
};
