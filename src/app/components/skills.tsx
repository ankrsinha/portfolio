import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { skills } from "../../data/skills.ts";

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {skills.map((skill: string, index: number) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
              >
                <Badge
                  variant="secondary"
                  className="text-lg px-6 py-3 cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50 bg-secondary/80"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}