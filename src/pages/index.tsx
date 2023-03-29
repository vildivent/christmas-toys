import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import Layout from "../shared/ui/Layout";
import ToysList from "widgets/ToysList";
import ToyCard from "widgets/ToyCard";
import ToyFilter from "widgets/ToyFilter";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const isFilterOpen = useFilterCardStore((state) => state.isOpen);

  return (
    <>
      <Head>
        <title>Коллекция ёлочных игрушек</title>
        <meta
          name="description"
          content="Коллекция ёлочных игрушек Гунько С.Ю."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {sessionData?.user.role === "Admin" ? (
          <>
            <ToyFilter />

            <div
              className={`z-0 flex h-full w-full flex-col transition duration-300 md:flex-row md:gap-2 ${
                isFilterOpen ? "opacity-0 md:opacity-100" : ""
              }`}
            >
              <div
                className={`${
                  isFilterOpen ? "opacity-0" : ""
                } transition duration-500`}
              >
                <ToyCard />
              </div>

              <ToysList />
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="m-5 flex flex-col gap-5 bg-gray-2/80 p-5 text-center">
              <h1 className="text-center font-h text-3xl">
                Коллекция ёлочных игрушек
              </h1>
              {sessionData && (
                <div className="text-red-500">
                  только администратор может просматривать коллекцию
                </div>
              )}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;
