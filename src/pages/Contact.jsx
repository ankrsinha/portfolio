import { TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-16">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h3 className="text-2xl font-semibold text-indigo-400">
            Let's connect 👋
          </h3>

          <p className="text-gray-400">
            I'm always open to discussing backend systems, Kubernetes,
            or interesting engineering problems. Feel free to reach out!
          </p>

          {/* Contact Links */}
          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <EmailIcon className="text-indigo-400" />
              <span>ankur.sinha2019@gmail.com</span>
            </div>

            <a
              href="https://github.com/ankrsinha"
              target="_blank"
              className="flex items-center gap-3 hover:text-indigo-400 transition"
            >
              <GitHubIcon />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ankur-sinha"
              target="_blank"
              className="flex items-center gap-3 hover:text-indigo-400 transition"
            >
              <LinkedInIcon />
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-lg">

          <form className="flex flex-col gap-6">

            <TextField
              label="Name"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              className="mt-2"
            >
              Send Message
            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}