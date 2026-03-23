export default function Section({ title, children }) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">

      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}