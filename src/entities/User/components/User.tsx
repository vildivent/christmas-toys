import { useSession } from "next-auth/react";
import UserAvatar from "../../../shared/ui/UserAvatar";

const User = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      {sessionData?.user && (
        <div className="flex items-center gap-2">
          {sessionData.user.image && (
            <UserAvatar
              size="2.5rem"
              src={sessionData.user.image}
              alt={sessionData.user.name}
            />
          )}
          <span className="font-h text-xl text-white">
            {sessionData.user.name}
          </span>
        </div>
      )}
    </>
  );
};

export default User;
