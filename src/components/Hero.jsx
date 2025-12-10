export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gray-900 px-6">
      <h1 className="text-5xl font-extrabold mb-4">Saikiran Mavurapu</h1>
      
      <h2 className="text-2xl text-gray-400 mb-6">
        Building Modern, Scalable Web Applications
      </h2>
      <p className="max-w-2xl text-gray-300 mb-8">
        I specialize in React, JavaScript, Node.js, and building fast, user-focused web applications.
        Passionate about clean code, performance, and elegant UI.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
      >
        View My Work
      </a>
    </section>
  );
}
