import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./utils/ImageWithFallback";
import { motion } from "motion/react";
import { projects as staticProjects } from "../../data/projects";
import { ProjectImage } from "./ui/ProjectImage"

interface Project {
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  images?: string[];
}

const projects = staticProjects as Project[];

const gradients = [
  "from-purple-600 to-indigo-600",
  "from-blue-600 to-cyan-600",
  "from-orange-600 to-amber-600",
  "from-green-600 to-teal-600",
  "from-rose-600 to-pink-600",
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const gradient = gradients[index % gradients.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group h-full border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 z-10 group-hover:opacity-30 transition-opacity duration-300`} />
                      {project.images ? (
                        <ProjectImage images={project.images} title={project.title} />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                          <span className="text-6xl font-black text-white/30 px-4 text-center leading-tight shadow-sm tracking-tighter">
                            {project.title.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:dark:from-purple-400 group-hover:dark:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech?.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-sm border-border/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        {project.github && project.github !== "#" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 hover:scale-105 transition-transform"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button
                            size="sm"
                            className={`flex-1 bg-gradient-to-r ${gradient} hover:opacity-90 text-white border-0 hover:scale-105 transition-transform`}
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}