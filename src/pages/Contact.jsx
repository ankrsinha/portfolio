import { TextField, Button } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message required";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = validate();
        if (Object.keys(err).length) return setErrors(err);

        setLoading(true);

        try {
            await emailjs.send(
                "service_6pd7vmi",
                "template_yw4whsn",
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "ZGRGImuMeFANHitVO"
            );

            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
        } catch (e) {
            console.error(e);
        }

        setLoading(false);
    };

    return (
        <section className="px-6 py-24 max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-16">
                Let's Connect 🚀
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

                {/* LEFT PANEL */}
                <div className="space-y-6">

                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 
          p-6 rounded-2xl border border-slate-700">

                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                            Contact Info
                        </h3>

                        <p className="text-gray-400 text-sm">
                            Feel free to reach out for collaborations, internships, or just a chat.
                        </p>

                        <div className="mt-6 space-y-3 text-gray-300 text-sm">
                            <p>📧 ankur.sinha2019@gmail.com</p>
                            <p>📍 Bangalore, India</p>
                            <p>💼 Open to Backend / Systems roles</p>
                        </div>

                    </div>

                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 
p-6 rounded-2xl border border-slate-700 ">

                        <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                            Socials
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-300">

                            <a
                                href="https://github.com/ankrsinha"
                                target="_blank"
                                className="flex items-center gap-3 p-3 rounded-lg 
      hover:bg-slate-700 transition"
                            >
                                <GitHubIcon />
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/in/ankur-sinha"
                                target="_blank"
                                className="flex items-center gap-3 p-3 rounded-lg 
      hover:bg-slate-700 transition"
                            >
                                <LinkedInIcon />
                                LinkedIn
                            </a>

                            <a
                                href="https://dev.to/ankrsinha"
                                target="_blank"
                                className="flex items-center gap-3 p-3 rounded-lg 
      hover:bg-slate-700 transition"
                            >
                                <ArticleIcon />
                                Blogs
                            </a>

                        </div>

                    </div>

                </div>

                {/* RIGHT PANEL (FORM) */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 
        p-8 rounded-2xl border border-slate-700 
        hover:border-indigo-500/30 transition">

                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                        <TextField
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            fullWidth
                            sx={inputStyle}
                        />

                        <TextField
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            sx={inputStyle}
                        />

                        <TextField
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            multiline
                            rows={4}
                            fullWidth
                            sx={inputStyle}
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={loading}
                            startIcon={<SendIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                                padding: "12px",
                                fontWeight: "600",
                                borderRadius: "10px",
                                textTransform: "none",
                            }}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </Button>

                        {success && (
                            <p className="text-green-400 text-center animate-pulse">
                                Message sent successfully 🚀
                            </p>
                        )}

                    </form>
                </div>

            </div>
        </section>
    );
}

const inputStyle = {
    input: { color: "#fff" },
    textarea: { color: "#fff" },
    label: { color: "#9ca3af" },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#334155" },
        "&:hover fieldset": { borderColor: "#6366f1" },
        "&.Mui-focused fieldset": { borderColor: "#6366f1" },
    },
};