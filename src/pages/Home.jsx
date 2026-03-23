import Projects from "./Projects";
import About from "./About";
import Blogs from "./Blogs";
import Divider from "../components/Divider";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
                        Ankur
                    </span> 👋
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl">
                    Backend Engineer specializing in Kubernetes, Distributed Systems,
                    and Cloud-Native technologies.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                    <a
                        href="/projects"
                        className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex gap-6 text-gray-400">
                    <a href="https://github.com/ankrsinha" target="_blank" className="hover:text-white">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/ankur-sinha" target="_blank" className="hover:text-white">
                        LinkedIn
                    </a>
                    <a href="https://dev.to/ankrsinha" target="_blank" className="hover:text-white">
                        Blogs
                    </a>
                </div>

                {/* Stats Section (VERY IMPORTANT 🔥) */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    <div>
                        <h3 className="text-2xl font-bold text-indigo-400">5+</h3>
                        <p className="text-gray-400 text-sm">Projects</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-indigo-400">2+</h3>
                        <p className="text-gray-400 text-sm">Blogs</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-indigo-400">1</h3>
                        <p className="text-gray-400 text-sm">Internship</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-indigo-400">99.03%</h3>
                        <p className="text-gray-400 text-sm">GATE</p>
                    </div>

                </div>

            </section>

            {/* Sections */}
            <div>
                <Divider/>
                <Projects />
                <Divider />

                <About />
                <Divider />

                <Blogs />
            </div>
        </>
    );
}