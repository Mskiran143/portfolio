export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio built with React + Tailwind.",
      link: "https://github.com/YOUR_GITHUB/portfolio",
    },
    {
      title: "E-Commerce UI",
      desc: "Modern store UI with cart system and product filtering.",
      link: "https://github.com/YOUR_GITHUB/ecommerce-ui",
    },
    {
      title: "Weather App",
      desc: "Real-time weather dashboard using OpenWeather API.",
      link: "https://github.com/YOUR_GITHUB/weather-app",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map(p => (
          <div
            key={p.title}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
