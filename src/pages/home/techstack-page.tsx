import { ArrowLeft } from "lucide-react";
import { ThemeProvider } from "#/components/theme-provider";

import techStack from "@/pages/data/tech-stack.json";
import { Link } from "@tanstack/react-router";

export default function TechStackPage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="min-h-screen w-full bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col px-40 py-10">
          {/* Header */}
          <div className="mb-8 flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-white/80 transition-opacity hover:opacity-70"
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
                      className="border border-white px-5 py-2 text-xs font-medium transition-colors hover:bg-white hover:text-black"
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
    </ThemeProvider>
  );
}
