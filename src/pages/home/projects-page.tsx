import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import projects from "@/pages/data/projects.json";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen w-full dark:bg-black text-accent-foreground">
      <div className="mx-auto flex max-w-6xl flex-col px-40 py-10">
        <div className="mb-8 flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-xl font-bold tracking-tight">All Projects</h1>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-2">
            {projects.map((item) => (
              <div
                key={item.name}
                className="w-full px-5 py-2 text-xs font-medium transition-colors border-b dark:border-none dark:bg-[#111111] flex cursor-pointer"
              >
                <Link to={item.link}>
                  <div className="space-y-1 flex flex-col">
                    <span className="text-xl font-montserrat font-semibold tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-sm font-quicksand font-semibold">
                      {item.description}
                    </span>

                    <span>
                      <p className="text-xs text-accent-foreground bg-zinc-200 dark:bg-black font-mono px-2 py-1 inline-block mt-1">
                        {item.linkPlaceHolder}
                      </p>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
