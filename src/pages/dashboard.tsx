import User from "entities/User/components/User";
import type { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "server/auth";
import { api } from "shared/api/trpc";
import Layout from "shared/ui/Layout";
import Loading from "shared/ui/Loading";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session?.user.role !== "ADMIN") return { notFound: true, props: {} };

  return { props: { session } };
};

const Dashboard: NextPage = () => {
  const ctx = api.useContext();

  const { data: sessionData } = useSession();
  if (sessionData?.user.role !== "ADMIN") return null;

  const { data: users, isLoading: loadingUsers } = api.user.getAll.useQuery();
  const { mutate, isLoading: updateUsersLoading } = api.user.update.useMutation(
    {
      onSuccess() {
        void ctx.user.getAll.invalidate();
      },
    }
  );

  const setNewRole = (id: string, newRole: string) => {
    if (newRole === Role.ADMIN) mutate({ id, role: "ADMIN" });
    if (newRole === Role.GUEST) mutate({ id, role: "GUEST" });
    if (newRole === Role.USER) mutate({ id, role: "USER" });
  };

  return (
    <Layout>
      <div className="relative flex h-full w-full flex-col items-center gap-5 bg-gray-2/80 p-5">
        <div className="flex w-full items-center justify-center gap-2">
          <h2 className="font-h text-2xl">Список пользователей</h2>
          {(loadingUsers || updateUsersLoading) && <Loading />}
        </div>

        <div className="grid grid-cols-2 gap-y-5 gap-x-2">
          {users &&
            users.map((user) => (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                image={user.image}
                role={user.role}
                setNewRole={setNewRole}
                options={options}
                disabled={user.id === sessionData?.user.id}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

enum Role {
  ADMIN = "Администратор",
  USER = "Пользователь",
  GUEST = "Гость",
}

const options = [Role.ADMIN, Role.USER, Role.GUEST];
