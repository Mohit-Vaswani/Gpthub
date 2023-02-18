import Layout from "@/components/Layout";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <Layout title={"Find Keywords"}>
    <div className="text-center w-full my-40 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl">Find Prompts Related to Specific Keywords : Coming Soon</h1>
      </div>
        <Link href="/" className="underline text-2xl mt-10">Back To Home</Link>
    </div>
    </Layout>
  );
}
