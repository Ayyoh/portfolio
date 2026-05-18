import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

import projects from "@/pages/data/projects.json";
import techStack from "@/pages/data/tech-stack.json";
import experience from "@/pages/data/experience.json";

export default function TechStackComponent() {
  return (
    <div className="flex flex-row gap-2 w-full h-120">
      <div className="flex flex-col gap-2 w-full h-120">
        <div className="flex flex-col gap-2 dark:bg-[#111111] border-b dark:border-none w-full h-full p-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold font-quicksand text-lg">Tech Stack</h1>

            <Link to="/tech-stack">
              <Button variant="ghost" className="text-xs cursor-pointer">
                View All
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-sm">Frontend</h1>

              <div className="flex flex-row gap-4 px-2">
                {techStack.frontend.slice(0, 5).map((stack) => (
                  <div key={stack.name}>
                    <h1 className="text-sm">{stack.name}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-sm">Backend</h1>

              <div className="flex flex-row gap-4 px-2">
                {techStack.backend.slice(0, 5).map((stack) => (
                  <div key={stack.name}>
                    <h1 className="text-sm">{stack.name}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-sm">DevOps & Cloud</h1>

              <div className="flex flex-row gap-4 px-2">
                {techStack.devops.slice(0, 5).map((stack) => (
                  <div key={stack.name}>
                    <h1 className="text-sm">{stack.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 dark:bg-[#111111] border-b dark:border-none w-full h-full p-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold font-quicksand text-lg">
              Recent Projects
            </h1>

            <Link to="/projects">
              <Button variant="ghost" className="text-xs cursor-pointer">
                View All
              </Button>
            </Link>
          </div>

          <div className="px-3 grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="block flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              >
                <Link to={project.link} target="_blank">
                  <h1 className="text-md font-bold font-quicksand">
                    {project.name}
                  </h1>
                  <p className="text-xs font-quicksand">
                    {project.description}
                  </p>
                  <p className="text-xs text-foreground/70 bg-zinc-100 dark:bg-black font-mono px-2 py-1 rounded-md inline-block mt-1">
                    {project.linkPlaceHolder}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 dark:bg-[#111111] border-b dark:border-none w-120 h-full group">
        <h1 className="font-bold font-quicksand text-lg">Experience</h1>

        <div className="relative space-y-4 h-full">
          <div className="absolute left-2 top-1.5 bottom-2 h-full w-px bg-border" />
          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item.role} className="relative pl-6 flex items-start">
                <div
                  className={`absolute left-0.5 top-1 w-3 h-3 rounded-full border-2 border-accent ${item.year === 2026 ? "bg-accent-foreground" : "bg-accent"} transition-colors`}
                />
                <div className="space-y-1 w-full">
                  <h1 className="text-sm">{item.role}</h1>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-foreground/70">{item.company}</p>

                    <p className="text-tiny font-mono px-1.5 py-0.5 rounded-full">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
