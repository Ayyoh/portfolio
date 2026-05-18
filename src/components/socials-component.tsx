import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export default function SocialsComponent() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/Ayyoh",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sunaa.razi/",
      icon: Instagram,
    },
  ];

  const contacts = [
    {
      label: "Email",
      title: "suna.dev2010@gmail.com",
      href: "mailto:suna.dev2010@gmail.com",
      icon: Mail,
      bordered: true,
    },
    {
      label: "Let's Talk",
      title: "Schedule a Call",
      href: "#",
      icon: Calendar,
      bordered: true,
    },
  ];

  return (
    <section className="w-full dark:border-none dark:bg-[#111111] text-accent-foreground">
      <div className="flex w-full items-start justify-between gap-20 p-6">
        {/* Membership */}
        <div className="w-55 space-y-2">
          <h1 className="text-sm font-semibold tracking-wide text-accent-foreground">
            A member of
          </h1>

          <div className="group flex items-start justify-between gap-4">
            <h2 className="text-sm font-medium leading-snug text-accent-foreground">
              Maveriks
            </h2>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-45 space-y-4">
          <h1 className="text-sm font-semibold tracking-wide text-accent-foreground">
            Social Links
          </h1>

          <div className="space-y-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  to={social.href}
                  className="group flex items-center gap-3 text-accent-foreground transition-colors hover:text-muted-foreground"
                >
                  <Icon size={20} />

                  <span className="text-xs font-medium">{social.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div className="w-70 space-y-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Link
                key={contact.title}
                to={contact.href}
                className={`group flex items-start justify-between ${
                  contact.bordered ? "border-b dark:border-white/10 pb-4" : ""
                }`}
              >
                <div className="flex gap-3">
                  <Icon size={18} className="mt-0.5 text-accent-foreground" />

                  <div>
                    <p className="text-xs text-accent-foreground">
                      {contact.label}
                    </p>

                    <h2 className="text-xs font-medium text-accent-foreground">
                      {contact.title}
                    </h2>
                  </div>
                </div>

                <ArrowRight
                  size={16}
                  className="text-accent-foreground transition-transform group-hover:translate-x-1"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
