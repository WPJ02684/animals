import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ANIMALS, JOBS_URL, LINE_URL, getAnimal } from "@/lib/quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return ANIMALS.map((animal) => ({ type: animal.id }));
}

export async function generateMetadata(
  props: PageProps<"/result/[type]">,
): Promise<Metadata> {
  const { type } = await props.params;
  const animal = getAnimal(type);
  if (!animal) return {};

  return {
    title: `我是${animal.title}！｜你的職場動物人格`,
    description: animal.traits,
    openGraph: { images: [animal.image] },
  };
}

export default async function ResultPage(props: PageProps<"/result/[type]">) {
  const { type } = await props.params;
  const animal = getAnimal(type);
  if (!animal) notFound();

  return (
    <main className="flex flex-1 flex-col items-center px-5 py-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <section className="flex flex-col items-center gap-5 rounded-3xl bg-card p-8 text-center shadow-lg">
          <p className="text-sm font-medium tracking-widest text-muted">
            你的職場動物人格是
          </p>

          <div
            className="w-52 overflow-hidden rounded-full p-2"
            style={{ backgroundColor: `${animal.color}33` }}
          >
            <Image
              src={animal.image}
              alt={animal.name}
              width={400}
              height={400}
              priority
              className="h-auto w-full"
            />
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            {animal.emoji} 你是「
            <span style={{ color: animal.color }}>{animal.title}</span>」
          </h1>

          <ul className="flex flex-wrap justify-center gap-2">
            {animal.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-4 py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: animal.color }}
              >
                #{tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 text-left text-lg leading-relaxed">
            {animal.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold">你的工作優勢</h2>
          <ul className="grid grid-cols-2 gap-3">
            {animal.strengths.map((strength) => (
              <li
                key={strength.text}
                className="flex items-center gap-3 rounded-2xl bg-accent-soft/60 px-4 py-3 font-medium"
              >
                <span className="text-2xl">{strength.icon}</span>
                {strength.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold">你可以優先看看</h2>
          <ul className="flex flex-wrap gap-2">
            {animal.jobs.map((job) => (
              <li
                key={job}
                className="rounded-full border-2 px-4 py-1.5 font-medium"
                style={{ borderColor: animal.color, color: animal.color }}
              >
                「{job}」
              </li>
            ))}
          </ul>
        </section>

        <section
          className="flex flex-col gap-4 rounded-3xl p-6 text-center text-white shadow-lg"
          style={{ backgroundColor: animal.color }}
        >
          <p className="text-xl font-bold">
            我們現在剛好有適合「{animal.name}型」的工作！
          </p>
          <p className="opacity-90">
            不知道選哪一個也沒關係，把測驗結果傳給我們，我們幫你配對。
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-lg font-semibold shadow-md transition hover:brightness-95 active:scale-95"
              style={{ color: animal.color }}
            >
              看看適合我的工作
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#06C755] px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95"
            >
              加入 LINE 讓人資幫我配對
            </a>
          </div>
        </section>

        <div className="flex flex-col items-center gap-3 pb-4">
          <Link
            href="/quiz"
            className="font-semibold text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            再測一次
          </Link>
          <Link href="/" className="text-sm text-muted hover:text-foreground">
            回到首頁
          </Link>
        </div>
      </div>
    </main>
  );
}
