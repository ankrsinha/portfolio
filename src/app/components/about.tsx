import { Card, CardContent } from "./ui/card";
import { Server, Cloud, Layers, Brain } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Server,
      title: "Backend & Systems",
      description: "Distributed systems, Kubernetes controllers, concurrency, Go & Linux system programming.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description: "Kubernetes, Docker, CRDs, Tekton pipelines, event-driven reconciliation systems.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Layers,
      title: "Full-Stack",
      description: "React, Node.js, Spring Boot with real-time systems and payments.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "GATE AIR 1196 (99.03 percentile) with strong CS fundamentals.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent mb-8">
              About Me
            </h2>
            <div className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-6">
              <p>
                I'm an M.Tech Computer Science student at{" "}
                <span className="text-foreground font-semibold">IIIT Bangalore</span>,
                focused on backend systems, distributed systems, and cloud-native technologies.
              </p>
              <p>
                Currently working as a{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">Software Engineering Intern at Red Hat</span>,
                building Kubernetes-native systems using CRDs, controllers, and event-driven architectures.
              </p>
              <p>
                I enjoy designing scalable systems and working close to infrastructure,
                solving real-world problems through efficient and reliable system design.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 h-full relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 shadow-lg flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
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