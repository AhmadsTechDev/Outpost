import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="topo-bg flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span aria-hidden className="size-1.5 rotate-45 bg-primary" />
          Early access
        </p>

        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          An <span className="text-primary">outpost</span> for whatever you&apos;re building
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          A shared workspace where an AI agent writes and draws alongside you and your team, live.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-5 text-base">
            <Link href="/sign-up">Start building free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 px-5 text-base">
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
