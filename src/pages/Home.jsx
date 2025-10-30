import React, { useRef, useState } from 'react';
import { Mail, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Home() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const userID = import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID';
    console.log("EmailJS IDs:", serviceID, templateID, userID);


    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then((result) => {
        console.log('EmailJS success:', result.text);
        setSent(true);
        setSending(false);
        formRef.current.reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        setSending(false);
        alert('Could not send message. Please check console & EmailJS config.');
      });
  };

  const projects = [
    {
      title: 'E-Commerce Web Platform',
      desc: 'Full-stack MERN e-commerce app with JWT auth, cart, wishlist and payment flow (Stripe).',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
      github: 'https://github.com/Dhaneesh7/quickart_mern_deploy',
      live: 'https://quickart-mern-deploy.vercel.app/'
    },
    {
      title: 'Blog Platform (MERN)',
      desc: 'A blog app with user auth, CRUD and rich-text editor.',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
    }
  ];

  const goProfile = () => {
    window.location.href = '/profile';
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={goProfile}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">DV</div>
            <div>
              <h1 className="text-lg font-semibold">Dhaneesh V Jayakumaran</h1>
              <p className="text-sm text-gray-500">MERN Stack Developer</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-sm px-3 py-2 hover:bg-gray-100 rounded">Home</a>
                      <a href="/profile" className="text-sm px-3 py-2 hover:bg-gray-100 rounded">Profile</a>
            <a href="#projects" className="text-sm px-3 py-2 hover:bg-gray-100 rounded">Projects</a>
            <a href="#skills" className="text-sm px-3 py-2 hover:bg-gray-100 rounded">Skills</a>
            <a href="#contact" className="text-sm px-3 py-2 hover:bg-gray-100 rounded">Contact</a>
            <a href="/Dhaneesh_V_Jayakumaran_CV_Resume.pdf"
  download="Dhaneesh_J_MERN_Developer.pdf" className="ml-3 inline-flex items-center text-sm px-3 py-2 border rounded hover:bg-gray-50">Resume</a>
          </nav>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <div className="flex flex-col px-6 py-3 space-y-2">
              <a href="/" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#projects" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#skills" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#contact" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Contact</a>
<a href="/Dhaneesh_V_Jayakumaran_CV_Resume.pdf"
download="Dhaneesh_V_Jayakumaran_CV_Resume.pdf" className="py-2 border-b" onClick={() => setMenuOpen(false)}>Resume</a>
              <a href="/profile" className="py-2" onClick={() => setMenuOpen(false)}>Profile</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Dhaneesh 👋</h2>
        <p className="text-lg text-gray-600 mb-6">
          MERN Stack Developer passionate about building responsive and scalable web applications.
        </p>
        <div className="space-x-4">
          <a href="#projects" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">View Projects</a>
          <a href="#contact" className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50">Contact Me</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="border rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-600">
                    <ExternalLink size={16} className="mr-1" /> GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm text-gray-700 hover:text-indigo-600">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Git & GitHub'].map((skill, i) => (
              <span key={i} className="bg-white shadow px-3 py-2 rounded text-sm text-gray-700">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>
          <form ref={formRef} onSubmit={handleSend} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Your Message" required className="w-full border p-2 rounded h-32" />
            <button type="submit" disabled={sending} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
              {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </button>
          </form>

          <div className="text-center mt-6 space-x-4">
            <a href="mailto:dhaneeshvj5@gmail.com" className="inline-flex items-center text-gray-700 hover:text-indigo-600">
              <Mail size={18} className="mr-1" /> Email
            </a>
            <a href="https://www.linkedin.com/in/dhaneesh-v-jayakumaran" className="inline-flex items-center text-gray-700 hover:text-indigo-600">
              <Linkedin size={18} className="mr-1" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Dhaneesh V Jayakumaran | Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
