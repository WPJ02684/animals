import Image from "next/image";
import Link from "next/link";
import { ANIMALS, QUESTIONS } from "@/lib/quiz";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-muted">
            職場心理測驗
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            你的職場動物人格
          </h1>
          <p className="text-lg text-muted">
            {QUESTIONS.length} 個職場情境，找出最適合你的工作型態。
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {ANIMALS.map((animal) => (
            <div
              key={animal.id}
              className="flex flex-col items-center gap-1 rounded-2xl bg-card p-2 shadow-sm"
            >
              <Image
                src={animal.image}
                alt={animal.name}
                width={120}
                height={120}
                className="h-auto w-full"
              />
              <span className="text-xs text-muted sm:text-sm">
                {animal.title}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/quiz"
          className="rounded-full bg-accent px-10 py-4 text-lg font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          開始測驗
        </Link>
      </div>
    </main>
  );
}
