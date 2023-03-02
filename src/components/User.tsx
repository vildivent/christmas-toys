import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const User = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      {sessionData?.user && (
        <div className="flex items-center gap-2">
          {sessionData.user.image && (
            <div className="relative h-10 w-10 rounded-full">
              <Image
                className="rounded-full"
                src={sessionData.user.image}
                alt={sessionData.user.name || "user"}
                fill
              />
            </div>
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
