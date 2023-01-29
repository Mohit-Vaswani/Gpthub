import { useState } from "react";
import ImageData from "../data/imageData";
import PromptList from "./PromptList";

export default function MainContainer() {
  const [ImagePrompts, setImagePrompts] = useState(ImageData)
  ImagePrompts.sort(() => Math.random() - 0.5);
  return (
    <section>
      {/* Main Page */}
      <main className="w-full flex flex-col items-center text-center">
        {/* Heading */}
        <div className="mt-12">
          <p className="text-base sm:text-2xl text-blue-900">
            THE LARGEST PROMPTS DIRECTORY FOR MID JOURNRY & DALL-E.
          </p>
        </div>
      </main>
      {/* List Starts From Here */}
      <div className="flex gap-2 my-20 flex-wrap justify-center">
      <PromptList prompts={ImagePrompts} />
      </div>
    </section>
  );
}
