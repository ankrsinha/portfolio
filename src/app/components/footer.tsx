import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                About
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A passionate developer dedicated to creating beautiful and
                functional web experiences that make a difference.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    → Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://github.com/ankrsinha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button> */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:ankur.sinha2019@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>&copy; {currentYear} Ankur Sinha. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and lots of coffee
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}