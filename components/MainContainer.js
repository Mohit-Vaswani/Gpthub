import { useState } from "react";
import data from "../data/data";
import PromptList from "./PromptList";

export default function MainContainer() {
  const [prompts, setPrompts] = useState(data);
  prompts.sort(() => Math.random() - 0.5);
  return (
    <section>
      {/* Main Page */}
      <main className="w-full flex flex-col items-center text-center">
        {/* Heading */}
        <div className="mt-12">
          <h1 className="text-3xl sm:text-7xl text-black font-medium mb-2">
            GPTHUB
          </h1>
          <p className="text-base sm:text-2xl text-blue-900">
            THE LARGEST PROMPTS DIRECTORY FOR CHATGPT, UPDATED DAILY.
          </p>
        </div>
        <div className="flex gap-2 my-20 flex-wrap justify-center">
          <PromptList prompts={prompts} />
        </div>
      </main>
      {/* List Starts From Here */}
    </section>
  );
}
