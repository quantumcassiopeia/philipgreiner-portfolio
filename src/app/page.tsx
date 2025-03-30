import ProjectCard from "@/Components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-3 pb-11 bg-[var(--background-secondary)]">
      <section
        id="hero"
        className="flex flex-col justify-center w-full max-w-7xl h-[600px]"
      >
        <h1 className="text-5xl font-medium leading-12 ">
          Olá, sou Philip Greiner
        </h1>
        <p className="text-[18px] pt-5 font-light">
          Desça a página para conferir meu trabalho.{" "}
          <span className="text-3xl font-medium ">{":)"}</span>
        </p>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-7 w-full max-w-[1920px]">
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[0]} />
      </section>
    </main>
  );
}
