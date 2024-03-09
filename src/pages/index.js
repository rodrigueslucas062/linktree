import Head from "next/head";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link-hubs</title>
        <meta name="description" content="Linkhubs" />
        <meta property="og:url" content="https://link-hubs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Link-hubs" />
        <meta property="og:description" content="Linkhubs" />
      </Head>

      <main className="zig-zag min-h-screen min-w-screen p-4">
        <Navbar />
        <Main />
      </main>
    </>
  );
}
