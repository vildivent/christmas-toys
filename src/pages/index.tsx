import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import Layout from "../shared/ui/Layout";
import ToysList from "widgets/ToysList";
import ToyCard from "widgets/ToyCard";
import ToyFilter from "widgets/ToyFilter";
import { useFilterCardStore } from "widgets/ToyFilter/lib/store";
import { env } from "env.mjs";

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
        <meta property="og:title" content="Коллекция ёлочных игрушек" />
        <meta property="og:url" content={env.NEXT_PUBLIC_URL} />
        <meta
          property="og:description"
          content="Коллекция ёлочных игрушек Гунько С.Ю."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Layout>
        {sessionData?.user.role === "ADMIN" ||
        sessionData?.user.role === "USER" ? (
          <>
            <ToyFilter />

            <div
              className={`z-0 flex h-full w-full flex-col transition duration-300 md:flex-row md:gap-1 ${
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
          <div className="flex h-full w-full justify-center">
            <div className="m-5 mt-40 flex flex-col gap-5 p-5 text-center">
              <h1 className="text-shadow text-center font-h text-3xl">
                Коллекция ёлочных игрушек
              </h1>
              {sessionData && (
                <div className="flex items-center justify-center rounded-md bg-gray-2/80 p-2 shadow-md">
                  Для просмотра коллекции обратитесь к администратору
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
