import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import ThreeScene from "./components/ThreeScene";
import Timeline from "./components/Timeline";
import ProjectModal from "./components/ProjectModal";
import { motion } from "framer-motion";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dx9k1aeon/image/upload/v1737617982/WhatsApp_Image_2025-01-23_at_13.08.15_455e7527_go09qa.jpg",
    title: "E-learning Platform",
    category: "Full Stack ",
    description:
      "Engineered an Online Learning Management System (LMS) enabling seamless course creation, student enrollment, and progress tracking.",
    technologies: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB","github"],
    demoUrl: "https://gilded-kleicha-d08b79.netlify.app/",
    githubUrl: "https://github.com/Manishrajwar/E-learning-Platform",
  },
  {
    image:
      "https://res.cloudinary.com/dx9k1aeon/image/upload/v1737618269/WhatsApp_Image_2025-01-23_at_13.14.07_0d3f3ed6_wghgdw.jpg",
    title: "Project and Employee Management System",
    category: "Full Stack ",
    description:
      "Developed an Employee and Project Management System to streamline clock-in/out, leave tracking, and task assignment. Implemented role-based access control and integrated calendar management for efficient project tracking.",
      technologies: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB","github","Socket.io"],
    demoUrl: "https://emrsystem.netlify.app/",
    githubUrl: "https://github.com/Manishrajwar/dashFront",
  },
  {
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    title: "Email Configuration Management Tool",
    category: "Full Stack & Automation",
    description: 
      "A tool designed to simplify managing email configurations for multiple projects. Users can easily input unique email credentials (email, password) for each project and deploy them on separate domains, saving time and minimizing manual effort.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "DevOps"],
    demoUrl: "https://example.com",  
    githubUrl: "https://github.com"
}

];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold dark:text-white">
              Manish<span className="text-blue-500">Dev+Ops</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#work"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Work
              </a>
              <a
                href="#timeline"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Timeline
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="dark:text-white" />
                ) : (
                  <Menu className="dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
             
              <a
                href="#work"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Work
              </a>
              <a
                href="#timeline"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Timeline
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ThreeScene />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 dark:text-white"
            >
              Junior Software Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-5xl mx-auto"
            >
              Proficient junior software engineer with 1 year and 6 months of experience in
              designing, developing, and implementing software applications.
              Utilize JavaScript, C++, and Python to write scalable, secure code
              with a knack for problem-solving. Successfully optimized a
              software program resulting in a 30% efficiency increase.Currently enhancing my skill set by learning DevOps to streamline development processes and improve software delivery.
            </motion.p>
            <a  href="#work"> 
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors inline-flex items-center group"
            >
             View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Professional Journey
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Manishrajwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Github className="w-8 h-8 text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://x.com/manishrajw36203"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Twitter className="w-8 h-8 text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-rajwar-5b4070265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Linkedin className="w-8 h-8 text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="mailto:manishsinghrajwar80@gmail.com"
              className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Mail className="w-8 h-8 text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-6 dark:text-white">
              Neo<span className="text-blue-500">Port</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300 mb-8">
            "Judge me by my skills and dedication, not just words. With over 1600 GitHub contributions last year, my work speaks for itself—building dreams one commit at a time."
            </div>
            <div className="text-gray-600 dark:text-gray-300 mb-8">
              Contact: <a  href="tel:+917417733144"> <span className="text-blue-500 font-bold"> +91 7417733144 </span></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
