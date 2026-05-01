import React from "react";
import { ModeToggle } from "./mode-toggle";
import { MapPin, Trophy } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import ProfilePicture from "@/assets/profilepic.png"

export function HeaderComponent() {
  return (
    <div className="flex flex-row gap-4 w-full">
      <img src={ProfilePicture} alt="Profile Picture"className="rounded-md w-42 h-40" />

      <div className="py-2 w-full">
        <div className="mb-1 flex flex-row items-center justify-between">
          <h1 className="font-bold text-2xl">Suna Rintarou</h1>
          <ModeToggle />
        </div>

        <div className="flex flex-row items-center gap-1">
          <MapPin size={16} className="dark:text-white" />
          <h1 className="font-bold text-sm">Tokyo, Japan</h1>
        </div>

        <div className="mt-3 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1 text-md">
            <h1>AI</h1>
            <p className="text-zinc-600">\</p>
            <h1>Web Developer</h1>
            <p className="text-zinc-600">\</p>
            <h1>Content Creator</h1>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">
                  <Trophy size={16} /> Achievements
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Hackathon 1</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
