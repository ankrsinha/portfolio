import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Briefcase, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_6pd7vmi",
        "template_yw4whsn",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ZGRGImuMeFANHitVO"
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      console.error(e);
      alert("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankur.sinha2019@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Briefcase,
      title: "Status",
      value: "Open to Backend / Systems roles",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Let's Connect 🚀
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Feel free to reach out for collaborations, internships, or just a chat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-600" />
                <CardHeader className="pt-10 px-8 pb-8">
                  <CardTitle className="text-3xl font-bold tracking-tight">Send Me a Message</CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-2">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3 relative">
                      <Label htmlFor="name" className={`text-sm font-semibold tracking-wide uppercase ${errors.name ? 'text-red-500' : 'text-foreground/80'}`}>Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-14 border-0 border-b-2 ${errors.name ? 'border-red-500 focus-visible:border-red-500' : 'border-border/50 focus-visible:border-primary'} rounded-none px-0 bg-transparent shadow-none focus-visible:ring-0 transition-colors text-base`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.name}</p>}
                    </div>
                    <div className="space-y-3 relative">
                      <Label htmlFor="email" className={`text-sm font-semibold tracking-wide uppercase ${errors.email ? 'text-red-500' : 'text-foreground/80'}`}>Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-14 border-0 border-b-2 ${errors.email ? 'border-red-500 focus-visible:border-red-500' : 'border-border/50 focus-visible:border-primary'} rounded-none px-0 bg-transparent shadow-none focus-visible:ring-0 transition-colors text-base`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.email}</p>}
                    </div>
                    <div className="space-y-3 relative">
                      <Label htmlFor="message" className={`text-sm font-semibold tracking-wide uppercase ${errors.message ? 'text-red-500' : 'text-foreground/80'}`}>Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`border-0 border-b-2 ${errors.message ? 'border-red-500 focus-visible:border-red-500' : 'border-border/50 focus-visible:border-primary'} rounded-none px-0 bg-transparent shadow-none focus-visible:ring-0 transition-colors resize-none text-base`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 mt-6 text-base font-semibold bg-gradient-to-r from-violet-500 to-blue-600 hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                    {success && (
                      <p className="text-green-500 text-center animate-pulse mt-4 font-medium text-sm">
                        Message sent successfully 🚀
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} p-2.5 shadow-lg flex-shrink-0 flex items-center justify-center`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}