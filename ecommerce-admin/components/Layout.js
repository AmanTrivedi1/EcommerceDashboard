import Nav from "../components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-black w-screen h-screen flex  items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white font-semibold  rounded-lg px-4 py-2 text-black"
          >
            Login With Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mb-2 p-4 rounded-lg mt-2 mr-2">
        {children}
      </div>
    </div>
  );
}
