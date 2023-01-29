import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Showcase from "./Showcase";

export default function Layout({ title, description, keywords, children }) {

  const router = useRouter();
  
  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header/>
      {router.pathname === "/" && <Showcase/>}
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

Layout.defaultProps = {
  title: "GPT Hub 🤖 - The Largest prompts directory for Chatgpt, Midjourney & Dall-E.",
  description: "Welcome to GPT Hub, your ultimate source for the best prompts and tips for using the powerful language model ChatGPT. Our website offers a curated collection of the most engaging and effective prompts, as well as helpful resources and guides for getting the most out of ChatGPT.",
  keywords: "chatgpt, chatgpt prompts, ai tools",
};
