export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio built with React + Tailwind.",
      github: "https://github.com/Mskiran143/portfolio",
      live: "https://portfolio-nine-eta-mt9cpkwm0t.vercel.app/",
    },
    {
      title: "E-Commerce UI",
      desc: "Modern store UI with cart system and product filtering.",
      github: "https://github.com/Mskiran143/ecommerce-ui",
      live: "https://ecommerce-ui-zeta.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Real-time weather dashboard using OpenWeather API.",
      github: "https://github.com/Mskiran143/weather-app",
      live: "https://weather-app-xi-livid-86.vercel.app/",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <div className="flex flex-col space-y-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Repository →
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  View Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
