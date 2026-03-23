export default function Footer() {
  return (
   <footer className="bg-slate-900 py-10 text-center text-gray-400">

  <p className="text-lg font-semibold text-white">Ankur</p>

  <p className="mt-2 text-sm">
    Backend Engineer | Kubernetes | Distributed Systems
  </p>

  <div className="mt-4 flex justify-center gap-6">
    <a href="https://github.com/ankrsinha" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/ankur-sinha" target="_blank">LinkedIn</a>
    <a href="https://dev.to/ankrsinha" target="_blank">Blogs</a>
  </div>

  <p className="mt-6 text-xs text-gray-500">
    © {new Date().getFullYear()} Ankur
  </p>

</footer>
  );
}