import Link from "next/link";
import { Project } from "@/app/data/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.link}
      className="relative group w-full max-w-[22rem] sm:max-w-[35rem] aspect-[3/4]"
    >
      <div className="w-full h-full group:hover:scale-105 ">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute text-center p-3 inset-0 w-full h-full bg-[var(--primary-color)] text-[var(--text-color)] font-light flex flex-col items-center justify-center opacity-0 hover:opacity-90 duration-500">
        <h1>{project.title.toUpperCase()}</h1>
        <h2>{project.category.join(" / ")}</h2>
      </div>
    </Link>
  );
}
