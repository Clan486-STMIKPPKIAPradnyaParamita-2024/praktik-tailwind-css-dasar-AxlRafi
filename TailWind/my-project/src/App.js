import "./index.css";
import glassesGirl from "./images/glasses-girl.jpeg";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden body-dots bg-white">
      <header className="bg-[#D9CBA0] text-white p-6 mb-8 relative z-10">
        <img
          src={glassesGirl}
          alt="Glasses Girl"
          className="w-24 h-24 bg-blue-300 rounded-full border-4 border-white mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-extrabold text-center">John Doe</h1>
        <p className="text-center text-base mt-2 font-light">
          Web Developer & Designer
        </p>
      </header>

      <main
        className="w-3/4 bg-white rounded-lg shadow-lg mx-auto p-6 relative z-10"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center font-cute">
          About Me
        </h2>
        <p className="text-gray-600 text-base mb-6 text-center">
          I'm a web developer with a passion for building beautiful and
          functional websites.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Projects
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Portfolio Website",
              description:
                "A personal portfolio to showcase my skills and projects.",
              icon: "🌟",
            },
            {
              title: "E-commerce Platform",
              description:
                "An e-commerce site with cart functionality and payment integration.",
              icon: "🛒",
            },
            {
              title: "Blog Application",
              description:
                "A blog platform with user authentication and CRUD operations.",
              icon: "💼",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <span className="mr-2">{project.icon}</span>{" "}
              <div>
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center mt-10 mb-8 relative z-10">
        <button className="bg-green-300 text-white px-8 py-3 rounded-lg mt-4 mr-2 shadow-lg transform transition-all duration-300 hover:bg-green-400 hover:shadow-xl hover:scale-105">
          Contact Me
        </button>
        <button className="bg-yellow-300 text-white px-8 py-3 rounded-lg mt-4 shadow-lg transform transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl hover:scale-105">
          View More Projects
        </button>
      </footer>
    </div>
  );
}
