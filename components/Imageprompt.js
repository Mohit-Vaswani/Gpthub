import ComingSoon from "./ComingSoon";


export default function MainContainer() {
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
        <ComingSoon/>
      </main>
      {/* List Starts From Here */}
    </section>
  );
}
