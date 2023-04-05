import { useSession } from "next-auth/react";
import UserAvatar from "../../../shared/ui/UserAvatar";

const CurrentUser = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData?.user && (
        <div className="flex items-center gap-2">
          {sessionData.user.image && (
            <UserAvatar
              src={sessionData.user.image}
              alt={sessionData.user.name?.split(" ")[0]}
            />
          )}
          <span className="font-h text-xl text-white">
            {sessionData.user.name?.split(" ")[0]}
          </span>
        </div>
      )}
    </>
  );
};

export default CurrentUser;
