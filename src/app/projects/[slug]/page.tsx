import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Required for static export (output: "export") — tells Next.js which slugs to pre-render
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
