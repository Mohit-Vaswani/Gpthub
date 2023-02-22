import Layout from "@/components/Layout";
import Link from "next/link";

const KeywordsData = [
  {
    id: 1,
    keyword: "Write",
    description: "Letters/Resumes/Greetings",
  },
  {
    id: 2,
    keyword: "Define",
    description: "State precisely the meaning",
  },
  {
    id: 3,
    keyword: "Suggest",
    description: "Movies/TV Series/Music",
  },
  {
    id: 4,
    keyword: "Brainstorm",
    description: "Request Idea of Suggestion",
  },
  {
    id: 5,
    keyword: "Code",
    description: "Writes and Debug Codes",
  },
  {
    id: 6,
    keyword: "Facts",
    description: "Your Knowledge Assistant",
  },
  {
    id: 7,
    keyword: "Explain",
    description: "Topic / Concept Clarification",
  },
  {
    id: 8,
    keyword: "Analyse",
    description: "Can Analyse data or statistics",
  },
  {
    id: 9,
    keyword: "Translate",
    description: "Real-time and high quality",
  },
  {
    id: 10,
    keyword: "Create",
    description: "Poems/Blogs/Songs/Stories",
  },
  {
    id: 11,
    keyword: "List",
    description: "List items related to a topic",
  },
  {
    id: 12,
    keyword: "Summarise",
    description: "Brief summary of subject",
  },
];

export default function Keywords() {
  return (
    <Layout title={"Find Keywords"}>
      <section className="w-full flex flex-col justify-center items-center">
        <h2 className="my-10 text-3xl">Top ChatGpt Keywords</h2>
        <main className="flex flex-wrap gap-5 justify-center mb-16">
          {KeywordsData.map((keyword) => {
            return (
              <div key={keyword.id} className="w-80 p-5 bg-white text-indigo-900 text-center rounded transition-all duration-100 border-4 border-transparent hover:rotate-3 hover:border-indigo-900 shadow-lg cursor-pointer">
                <h3 className="text-xl font-semibold">{keyword.keyword}</h3>
                <p className="text-lg">{keyword.description}</p>
              </div>
            );
          })}
        </main>
      </section>
    </Layout>
  );
}
