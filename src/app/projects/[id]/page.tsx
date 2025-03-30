import Image from "next/image";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;
export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center min-h-svh">
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
        <section></section>
      </article>
    </main>
  );
}
