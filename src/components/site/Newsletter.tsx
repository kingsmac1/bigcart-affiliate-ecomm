import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("You're in! Look out for our next drop.");
    setEmail("");
  }
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-brand-foreground/70">
          Stay in the loop
        </p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl text-brand-foreground">
          Join our Newsletter
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-brand-foreground/80">
          Get the products our editors are actually buying — once a week, no spam.
        </p>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-full bg-white/95 px-5 py-4 sm:py-0 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-[#1a1116] px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
