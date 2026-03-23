import { education } from "../data/education";

export default function Education() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Education
      </h2>

      {education.map((edu, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">{edu.institute}</h3>
          <p className="text-gray-400">
            {edu.degree} | {edu.duration}
          </p>
          <p className="text-gray-400">CGPA: {edu.cgpa}</p>
        </div>
      ))}
    </section>
  );
}