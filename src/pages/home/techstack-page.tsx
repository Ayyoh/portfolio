import { ArrowLeft } from "lucide-react";

import techStack from "@/pages/data/tech-stack.json";
import { Link } from "@tanstack/react-router";

export default function TechStackPage() {
  return (
    <section className="min-h-screen w-full dark:bg-black text-accent-foreground">
      <div className="mx-auto flex max-w-6xl flex-col px-40 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-xl font-bold tracking-tight">Tech Stack</h1>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="space-y-6">
              {/* Title */}
              <h2 className="text-lg font-bold capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {items.map((item: { name: string }) => (
                  <div
                    key={item.name}
                    className="border border-accent-foreground px-5 py-2 text-xs font-medium transition-colors hover:bg-accent"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
