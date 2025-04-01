"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";

import { projects } from "@/app/data/projects";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const projectId = parseInt(useParams().id as string);
  const project = projects.find((project) => project.id === projectId);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY * -0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  if (!project) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center">
      <div
        className="fixed inset-0 h-screen -z-10"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <Image
          src={project.cover}
          fill
          alt={project.title}
          className="object-cover"
          quality={100}
        />
      </div>
      <article className="flex flex-col items-center mt-[900px] w-screen px-7 bg-white">
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
        <section className="flex items-center mt-10 h-[5rem] w-full max-w-[980px] text-[18px] font-medium">
          {prevProject && (
            <Link
              className="material-symbols-outlined"
              href={`/projects/${prevProject.id}`}
            >
              arrow_back
            </Link>
          )}
          <Link className="mx-auto" href="/">
            Ver todos os projetos
          </Link>
          {nextProject && (
            <Link
              className="material-symbols-outlined"
              href={`/projects/${nextProject.id}`}
            >
              arrow_forward
            </Link>
          )}
        </section>
      </article>
    </main>
  );
}
