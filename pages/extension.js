import Link from "next/link";
import Layout from "@/components/Layout";

const Extension = () => {
  return (
    // <Layout title={"Extension"}>
    // <h1 className="my-40 text-center"></h1>
    // <Link href="/" className="underline text-2xl mt-10">Back To Home</Link>
    // </Layout>
    <Layout title={"Find Keywords"}>
      <div className="text-center w-full my-40 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl">Launching Soon 🚀</h1>
        </div>
        <Link href="/" className="underline text-2xl mt-10">
          Back To Home
        </Link>
      </div>
    </Layout>
  );
};

export default Extension;
