import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";
import { projects } from "../data/projects";
import Section from "../components/Section";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <Section title="Projects">

      {/* Featured */}
      <div className="space-y-10 mb-16">
        {featured.map((p, i) => (
          <FeaturedProject key={i} {...p} />
        ))}
      </div>

      <div className="border-t border-gray-700 mb-10"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

    </Section>
  );
}