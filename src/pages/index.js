import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <main className="zig-zag min-h-screen min-w-screen p-4">
        <Navbar />
        <Main />
      </main>
    </>
  );
}
