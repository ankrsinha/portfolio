import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { blogs } from "../../data/blogs";

const gradients = [
  "from-pink-600 to-rose-600",
  "from-violet-600 to-purple-600",
  "from-blue-600 to-cyan-600",
  "from-emerald-600 to-teal-600"
];

export function Blogs() {
  return (
    <section id="blogs" className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform delay-1000" />
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
              Latest Articles
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Technical writings, insights, and lessons learned
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => {
              const gradient = gradients[index % gradients.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group h-full border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative">
                    <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${gradient} transition-transform duration-300 group-hover:scale-y-110`} />
                    <CardHeader className="pl-8 pt-8">
                      <div className="mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-2.5 shadow-md flex items-center justify-center`}>
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl leading-snug group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pl-8 pb-8 mt-auto flex justify-between items-center">
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        Article
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full hover:bg-gradient-to-r ${gradient} hover:text-white transition-all`}
                        asChild
                      >
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Read ${blog.title}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
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
