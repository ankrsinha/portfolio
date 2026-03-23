import { blogs } from "../data/blogs";
import Section from "../components/Section";

export default function Blogs() {
  return (
    <Section title="Blogs">

      <div className="space-y-6 max-w-3xl mx-auto">
        {blogs.map((blog, i) => (
          <a
            key={i}
            href={blog.link}
            target="_blank"
            className="block bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl 
            shadow-md hover:shadow-indigo-500/20 transition duration-300 
            transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-indigo-400">
              {blog.title}
            </h3>
{/* 
            <p className="mt-3 text-gray-400 text-sm">
              Deep dive into Kubernetes internals and controller patterns.
            </p> */}

            <div className="mt-4 text-sm text-indigo-400">
              Read Article →
            </div>
          </a>
        ))}
      </div>

    </Section>
  );
}