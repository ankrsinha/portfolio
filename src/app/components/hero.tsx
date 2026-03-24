import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Download } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            > */}
            {/* <Sparkles className="h-4 w-4 text-primary" /> */}
            {/* <span className="text-sm font-medium">Available for work</span> */}
            {/* </motion.div> */}

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Ankur Sinha
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-xl -z-10 transform-gpu will-change-transform"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable distributed systems, robust backend services, and cloud-native infrastructure.
            Passionate about solving complex problems and working close to the metal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/50 dark:shadow-purple-500/30 transition-all hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-accent transition-all hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-2 hover:bg-accent transition-all hover:scale-105"
              asChild
            >
              <a href="/Ankur_Sinha_Resume_full.pdf" download="Ankur_Sinha_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://github.com/ankrsinha" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <a href="mailto:ankur.sinha2019@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.button>
    </section>
  );
}