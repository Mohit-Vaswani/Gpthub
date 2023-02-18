import { useState } from "react";
import data from "../data/imageData";
import SearchBar from "./SearchBar";
import { FiCopy } from "react-icons/fi";

export default function ImagePrompts() {
  const [prompts, setPrompts] = useState(data);
  const [filteredPrompts, setFilteredPrompts] = useState(prompts);
  const [copySuccess, setCopySuccess] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(text);
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  prompts.sort(() => Math.random() - 0.5);

  return (
    <section>
      {/* Main Page */}
      <main className="w-full flex flex-col items-center text-center">
        {/* Heading */}
        <div className="mt-12 px-4">
          <p className="text-base sm:text-2xl text-purple-500">
          THE LARGEST PROMPTS DIRECTORY FOR MID JOURNRY & DALL-E.
          </p>
        </div>
        <SearchBar prompts={prompts} setFilteredPrompts={setFilteredPrompts} />
        <div className="flex gap-2 my-10 flex-wrap justify-center">
        {filteredPrompts.map((prompt, index) => {
        const { id, text, tag } = prompt;
        const isSelected = selectedCard === index;
        return (
          <article
            key={id}
            className={`border p-4 w-80 flex flex-col justify-between text-left mx-3 relative cursor-pointer my-5 ${isSelected ? 'border-purple-500' : 'border-gray-700'}`}
            onClick={() => handleCardClick(index)}
          >
            <p className="text-sm md:text-base">{text}</p>
            <p className="text-sm border w-6/12 text-center px-3 mt-5 mb-1">
              {tag}
            </p>

            {isSelected && copySuccess === text ? (
              <p className="absolute text-white text-xs mb-5 mr-4 bottom-0 right-0">
                Copied to clipboard!
              </p>
            ) : (
              <button onClick={() => handleCopyClick(text)}>
                <FiCopy className="absolute right-0 bottom-0 m-6" />
              </button>
            )}
          </article>
        );
      })}
        </div>
      </main>
    </section>
  );
}
