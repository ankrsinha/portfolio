import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FeaturedProject({ title, description, tech, github }) {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">

            <h3 className="text-2xl font-bold text-indigo-400">
                {title}
            </h3>

            <p className="mt-4 text-gray-400 max-w-2xl">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className="text-sm px-3 py-1 bg-slate-700 rounded-full"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-6">
                <Button
                    variant="contained"
                    href={github}
                    target="_blank"
                    startIcon={<GitHubIcon />}
                >
                    View Project
                </Button>
            </div>
        </div>
    );
}