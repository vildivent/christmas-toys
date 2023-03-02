import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import Card from "../components/toyCard/Card";
import Layout from "../components/Layout";
import Sample from "../components/Sample";
import { useCardStore } from "../components/toyCard/store";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Коллекция ёлочных игрушек</title>
        <meta name="description" content="Коллекция ёлочных игрушек" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {sessionData ? (
          <>
            <ModalCard />
            <div
              className="flex flex-1 gap-2 overflow-auto"
              style={{ height: "calc(100vh - 56px - 8px)" }}
            >
              <div className="hidden flex-col bg-gray-2/80 md:flex md:w-[35vw]">
                <Card isModal={false} />
              </div>

              <Sample />
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="m-5 bg-gray-2/80 p-5">
              <h1 className="text-center font-h text-3xl">
                Коллекция ёлочных игрушек
              </h1>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Home;

export type toyCardState = "empty" | "add" | "edit" | "selected";

const ModalCard = () => {
  const isOpen = useCardStore((state) => state.isOpen);
  return (
    <div
      className={`z-10 flex flex-col overflow-auto bg-gray-2/80 transition-all duration-300 md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      style={{
        height: `${isOpen ? "calc(100vh - 56px - 8px)" : "0"}`,
      }}
    >
      <Card isModal={true} />
    </div>
  );
};
