"use client";

import Image from "next/image";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { id } = useParams();
  const projectId = parseInt(id as string);
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center ">
      <div className="fixed inset-0 -z-10">
        <Image
          src={project.projectCover}
          fill
          alt={project.title}
          className="object-cover"
        />
      </div>
      <article className="flex flex-col items-center mt-[700px] w-screen px-7 bg-white">
        <section className="w-full max-w-[980px] py-24 text-[18px] font-medium text-[var(--text-color)]">
          <h1 className="text-4xl tracking-widest leading-12">
            {project.title.toUpperCase()}
          </h1>
          <h2>{project.category.join(" | ")}</h2>
          {project.coauthors && (
            <h2>
              Cocriação: <span className="font-light">{project.coauthors}</span>
            </h2>
          )}
          <p className="text-[17px] font-light max-w-[590px] pt-6 whitespace-pre-line">
            {project.description}
          </p>
        </section>
        <section className="flex flex-col gap-16">
          {project.images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={980}
              height={512}
              alt={project.title}
              className="object-cover"
            />
          ))}
        </section>
        <section className="flex items-center justify-between h-[5rem] w-full max-w-[980px]">
          <span>*</span>
          <Link href="/" className="text-[18px] font-medium">
            Ver todos os projetos
          </Link>
          <Link href="/" className="material-symbols-outlined">
            arrow_forward
          </Link>
        </section>
      </article>
    </main>
  );
}
