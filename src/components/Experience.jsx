import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      {experience.map((exp, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-2xl font-semibold">
            {exp.role} @ {exp.company}
          </h3>
          <p className="text-gray-400">
            {exp.duration} | {exp.location}
          </p>

          <ul className="list-disc ml-6 mt-3 text-gray-400 space-y-2">
            {exp.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}