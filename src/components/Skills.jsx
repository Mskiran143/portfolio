export default function Skills() {
  const skills = [
    "React", "JavaScript", "Node.js", "Tailwind CSS",
    "REST APIs", "Git & GitHub", "Responsive Design",
    "MongoDB", "PostgreSQL"
  ];

  return (
    <section className="py-20 bg-gray-800 text-white" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-5 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-lg shadow hover:bg-blue-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
