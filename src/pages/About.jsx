import Skills from "../components/Skills";
import Section from "../components/Section";

export default function About() {
    return (
        <Section title="About Me">

            {/* Bio */}
            <div className="text-gray-400 text-lg leading-relaxed space-y-6 text-center max-w-3xl mx-auto">

                <p>
                    I'm an M.Tech Computer Science student at
                    <span className="text-white font-medium"> IIIT Bangalore</span>,
                    focused on backend systems, distributed systems, and cloud-native technologies.
                </p>

                <p>
                    Currently working as a
                    <span className="text-indigo-400 font-medium"> Software Engineering Intern at Red Hat</span>,
                    building Kubernetes-native systems using CRDs, controllers, and event-driven architectures.
                </p>

                <p>
                    I enjoy designing scalable systems and working close to infrastructure,
                    solving real-world problems through efficient and reliable system design.
                </p>

            </div>

            {/* Key Highlights */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">

                {[
                    {
                        title: "Backend & Systems",
                        desc: "Distributed systems, Kubernetes controllers, concurrency, Go & Linux system programming.",
                    },
                    {
                        title: "Cloud-Native",
                        desc: "Kubernetes, Docker, CRDs, Tekton pipelines, event-driven reconciliation systems.",
                    },
                    {
                        title: "Full-Stack",
                        desc: "React, Node.js, Spring Boot with real-time systems and payments.",
                    },
                    {
                        title: "Problem Solving",
                        desc: "GATE AIR 1196 (99.03 percentile) with strong CS fundamentals.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl 
      border border-slate-700 
      hover:border-indigo-500/40 hover:shadow-indigo-500/20 
      transition duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="font-semibold text-xl text-indigo-400 mb-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}

            </div>

            {/* Skills */}
            <div className="mt-20 pt-10 border-t border-slate-800">
                <Skills />
            </div>

        </Section>
    );
}