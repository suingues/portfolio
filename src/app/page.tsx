import { Transition } from "@/components/transitions";

export default async function Home() {
  const subtitle = "I develop 3D visuals, user interfaces and web applications"
  
  return (
    <main className="relative">
      <section className="h-dvh w-dvw overflow-hidden relative">
        <Transition>
          <span className="blob size-1/2 absolute top-20 left-0 -rotate-45 blur-[100px]" />
        </Transition>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                Hello! I&apos;m João
              </h2>
              <h1 className="md:text-7xl text-3xl overflow-hidden">
                A front end devoloper
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl pb-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                {subtitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition>
          </div>
        </div>
      </section>
    </main>
  )
}