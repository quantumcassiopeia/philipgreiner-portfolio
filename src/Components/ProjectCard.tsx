import Link from "next/link";
import { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return <Link href={project.link}></Link>;
}
