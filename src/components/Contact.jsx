export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-800 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-300 mb-2">
        Email: saikiranmavurapu@gmail.com
      </p>

      <p className="text-gray-300 mb-2">
        LinkedIn: 
        <a
          href="https://www.linkedin.com/in/saikiran-mavurapu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          linkedin.com/in/saikiran
        </a>
      </p>

      <p className="text-gray-300">Location: United States</p>
    </section>
  );
}

