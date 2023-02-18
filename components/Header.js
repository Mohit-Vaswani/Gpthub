import Link from "next/link";
import { useState } from "react";
import ImagePrompts from "../pages/ImagePrompts"
import Keywords from "../pages/Keywords"
import Extension from "../pages/extension"

export default function Header() {
  return (
    <header className="w-full h-20 border-b border-gray-200 ">
      <nav className="flex justify-between px-6 py-2 items-center h-20">
        <Link href="/">
          <h2 className="text-2xl">GPT Hub 🤖</h2>
        </Link>
        <ul className="flex gap-8">
          <Link href="/ImagePrompts" element={<ImagePrompts/>}>
          <li className="hidden sm:block hover:text-teal-500 text-base sm:text-lg"><a>Image Prompts</a></li>
          </Link>
          <Link href="/Keywords" element={<Keywords/>}>
          <li className="hidden sm:block hover:text-pink-500 text-base sm:text-lg"><a>Keywords</a></li>
          </Link>
          <Link href="/extension">
          <li className="hidden sm:block hover:text-yellow-500 text-base sm:text-lg"><a>Extension</a></li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
