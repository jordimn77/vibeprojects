export default function Hero() {
  return (
    <section className="text-center py-32 space-y-6">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        Tu compañero IA en Español
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-white/90">
        Crea gemelos digitales realistas para aprender, conservar recuerdos o divertirte con parodias seguras.
      </p>
      <a
        href="/dashboard"
        className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:shadow-md"
      >
        Comienza gratis
      </a>
    </section>
  );
}
