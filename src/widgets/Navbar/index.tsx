import { useEffect, useState } from "react";
import { useToysNumberStore, useToysQueryStore } from "entities/Toy/lib/store";
import User from "../../entities/User/components/User";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineExclamation } from "react-icons/ai";
import { LogoutBtn, SearchBtn, MenuBtn, LoginBtn } from "shared/ui/buttons";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";
import { type ToyQuery } from "entities/Toy/types";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const { setIsOpen } = useFilterCardStore();
  const { query } = useToysQueryStore();
  const { toysNumber } = useToysNumberStore();
  const filerIsOn = useFilterIsOn(query);

  return (
    <nav className="flex w-full items-center justify-between bg-gray-2/80 px-2 py-2 md:px-5">
      <div className="flex gap-2">
        <MenuBtn onClick={() => null} />
        {sessionData?.user.role === "Admin" && (
          <div className="relative flex items-center gap-4">
            <SearchBtn onClick={() => setIsOpen((state) => !state)} />

            <AiOutlineExclamation
              className={`absolute top-1 right-7 text-lg text-red-500 ${
                filerIsOn ? "" : "opacity-0"
              }`}
            />
            <div className="text-lg">{toysNumber || 0}</div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
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
