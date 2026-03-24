import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Blogs } from "./components/blogs";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blogs />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
