import Link from "next/link";
import { useState } from "react";
import ImagePrompts from "../pages/ImagePrompts"
import Form from "../pages/form"
import Extension from "../pages/extension"
import {BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  return (
    <header className="w-full h-20 border-b-2 border-gray-200 ">
      <nav className="flex justify-between px-6 py-2 items-center h-20">
        <Link href="/">
          <h2 className="text-2xl">GPT Hub 🤖</h2>
        </Link>
        <ul className="flex gap-8">
          <Link href="/ImagePrompts" element={<ImagePrompts/>}>
          <li className="hidden sm:block hover:text-teal-500 text-base sm:text-lg"><a>Image Prompts</a></li>
          </Link>
          <Link href="/form" element={<Form/>}>
          <li className="hidden sm:block hover:text-pink-500 text-base sm:text-lg"><a>Add your Prompts</a></li>
          </Link>
          <Link href="/extension">
          <li className="hidden sm:block hover:text-yellow-500 text-base sm:text-lg"><a>Extension</a></li>
          </Link>
          <li className="hover:text-purple-500 text-base sm:text-lg mt-1 cursor-pointer"><a onClick={()=>setIsDark(!isDark)}>
          {isDark ? <BsFillSunFill/> : <BsFillMoonStarsFill/>}  
          </a></li>
        </ul>
      </nav>
    </header>
  );
}
