"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { QUESTIONS, calculateResult } from "@/lib/quiz";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    QUESTIONS.map(() => null),
  );

  const question = QUESTIONS[step];
  const selected = answers[step];
  const isLast = step === QUESTIONS.length - 1;
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  function select(index: number) {
    setAnswers((prev) => prev.map((a, i) => (i === step ? index : a)));
  }

  function next() {
    if (selected === null) return;
    if (!isLast) {
      setStep(step + 1);
      return;
    }
    const picks = QUESTIONS.map((q, i) => q.options[answers[i]!].animal);
    router.push(`/result/${calculateResult(picks).id}`);
  }

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-10">
      <div className="flex w-full max-w-xl flex-1 flex-col gap-8">
        <header className="flex items-center justify-between text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            ← 你的職場動物人格
          </Link>
          <span>
            {step + 1} / {QUESTIONS.length}
          </span>
        </header>

        <div className="h-2 w-full overflow-hidden rounded-full bg-accent-soft">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <section key={question.id} className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-snug sm:text-3xl">
            Q{step + 1}｜{question.title}
          </h2>

          <ul className="flex flex-col gap-3">
            {question.options.map((option, index) => {
              const active = selected === index;
              return (
                <li key={option.text}>
                  <button
                    type="button"
                    onClick={() => select(index)}
                    aria-pressed={active}
                    className={`w-full rounded-2xl border-2 px-5 py-4 text-left text-lg transition ${
                      active
                        ? "border-accent bg-accent-soft font-semibold"
                        : "border-transparent bg-card shadow-sm hover:border-accent-soft"
                    }`}
                  >
                    {option.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="mt-auto flex gap-3">
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="rounded-full border-2 border-accent-soft px-6 py-3 font-semibold text-muted transition hover:bg-accent-soft disabled:invisible"
          >
            上一題
          </button>
          <button
            type="button"
            onClick={next}
            disabled={selected === null}
            className="flex-1 rounded-full bg-accent px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100"
          >
            {isLast ? "送出" : "下一題"}
          </button>
        </div>
      </div>
    </main>
  );
}
