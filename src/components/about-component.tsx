import { Code, QrCode } from "lucide-react";
import React from "react";

export function AboutComponent() {
  return (
    <div className="flex flex-row gap-6 w-full h-100 mt-10">
      <div className="flex flex-col w-xl p-3 dark:bg-[#111111]">
        <h1 className="font-bold text-lg">About</h1>
        <div className="flex flex-col gap-5 mt-2">
          <p className="text-xs-big">
            I'm a full-stack web developer specializing in building modern,
            scalable, and high-performance web and mobile applications using
            technologies like React, Next.js, TypeScript, React Native, Node.js,
            PostgreSQL, and modern backend architectures.{" "}
          </p>

          <p className="text-xs-big">
            I work on projects ranging from full-stack platforms and SaaS
            applications to mobile apps and API-driven systems, focusing on
            clean UI/UX, performance optimization, authentication systems, and
            scalable backend development.{" "}
          </p>

          <p className="text-xs-big">
            I enjoy creating polished digital experiences and continuously
            improving my skills in software architecture, state management,
            databases, and modern development workflows. Recently, I've been
            exploring advanced system design concepts such as Domain-Driven
            Design (DDD), Hexagonal Architecture, and performance-focused
            application development to build more maintainable and
            production-ready systems.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col min-w-65 h-90">
        <div className="flex flex-col gap-2 px-4 py-6 rounded-lg relative h-full w-full overflow-hidden border border-white/10 bg-linear-to-br from-[#0a0a0a] via-[#2b2b2b] to-[#0a0a0a] shadow-[0_0_40px_rgba(255,255,255,0.04)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]" />

          <Code size={44} color="white" />
          <h1 className="text-white font-bold font-montserrat text-lg tracking-wide">
            Maveriks
          </h1>
          <p className="text-tiny text-zinc-600 font-semibold uppercase">
            Access Card
          </p>

          <div className="flex flex-col">
            <p className="text-tiny text-zinc-600 font-semibold uppercase mt-14 tracking-tighter">
              Founding Member
            </p>

            <h1 className="text-white font-semibold tracking-wide">Suna</h1>
          </div>

          <div className="flex flex-row items-end justify-between">
            <p className="text-[10px] font-bold text-zinc-600 uppercase mt-16">
              Developer
            </p>

            <QrCode size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}
