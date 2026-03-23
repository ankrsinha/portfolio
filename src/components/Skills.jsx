import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="text-center">

      <h3 className="text-2xl font-semibold mb-8">
        Skills & Technologies
      </h3>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-full 
            bg-gradient-to-br from-slate-800 to-slate-900 
            border border-slate-700 
            hover:border-indigo-500/40 hover:shadow-indigo-500/20 
            transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}