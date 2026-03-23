import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl 
    shadow-md hover:shadow-indigo-500/20 transition duration-300 
    transform hover:-translate-y-2 flex flex-col justify-between h-full">

      <div>
        <h3 className="text-xl font-semibold text-indigo-400">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 text-sm">
          {description}
        </p>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-slate-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="outlined"
          fullWidth
          href={github}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          View Code
        </Button>
      </div>
    </div>
  );
}