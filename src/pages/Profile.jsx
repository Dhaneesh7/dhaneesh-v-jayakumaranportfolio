// src/pages/Profile.jsx
import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-6xl  text-center items-center justify-center ">
        {/* Profile Image */}
        <img
          src="/dhaneesh.jpeg" // replace with your image path (e.g., /public/profile.jpg)
          alt="Dhaneesh V Jayakumaran"
          className="w-28 h-28 rounded-full mx-auto mb-4 shadow-md object-cover"
        />

        {/* Name and Role */}
        <h1 className="text-2xl font-bold text-gray-800">Dhaneesh V Jayakumaran</h1>
        <p className="text-gray-500 mb-6">MERN Stack Developer</p>

        {/* Info Section */}
   <section
  id="contact"
  className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-gray-700 mb-6 text-sm sm:text-base"
>
  <a
    href="mailto:dhaneeshvj5@gmail.com"
    className="flex items-center gap-2 hover:text-indigo-600"
  >
    <Mail size={18} className="text-indigo-600" />
    dhaneeshvj5@gmail.com
  </a>

  <span className="hidden sm:block text-gray-400">|</span>

  <p className="flex items-center gap-2">
    <MapPin size={18} className="text-indigo-600" />
    India
  </p>

  <span className="hidden sm:block text-gray-400">|</span>

  <a
    href="https://www.linkedin.com/in/dhaneesh-v-jayakumaran"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 hover:text-indigo-600"
  >
    <Linkedin size={18} className="text-indigo-600" />
    linkedin.com/in/dhaneesh-v-jayakumaran
  </a>

  <span className="hidden sm:block text-gray-400">|</span>

  <a
    href="https://github.com/Dhaneesh7"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 hover:text-indigo-600"
  >
    <Github size={18} className="text-indigo-600" />
    github.com/Dhaneesh7
  </a>
</section>

        <section id="summary" className="mt-6 bg-white rounded-xl shadow p-6 w-full mx-auto">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Professional Summary</h2>
        <p className="text-gray-700">
          Motivated BCA graduate and current MCA with hands-on experience in MERN Stack development. Proficient in building 
scalable full-stack applications using React.js, Node.js, Express, and MongoDB. Eager to contribute to dynamic teams and 
deliver seamless and intuitive user experiences
        </p>
      </section>

   <section id="skills" className="py-6 sm:py-20 bg-gray-50 rounded-lg">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Git & GitHub'].map((skill, i) => (
              <span key={i} className="bg-white shadow px-3 py-2 rounded text-sm text-gray-700">{skill}</span>
            ))}
          </div>
        </div>
      </section>
         {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Professional Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">MERN STACK Internship Trainee – Rogersoft Technologies</h3>
            <p className="text-sm text-gray-500 mb-3">Dec 2024 – Apr 2025 | Kochi, India</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Built responsive web applications using HTML, CSS, JavaScript, and React.</li>
              <li>Worked with MongoDB for data storage and retrieval.</li>
              <li>Applied theoretical knowledge to real-world projects.</li>
              <li>Collaborated with mentors and peers to implement new features and bug fixes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Master of Computer Applications (MCA)</h3>
              <p className="text-gray-600">IGNOU University | Jul 2025 – Present</p>
            </div>
            <div>
              <h3 className="font-semibold">Bachelor of Computer Application (BCA)</h3>
              <p className="text-gray-600">
                Chinmaya Mission College, Thrissur (Affiliated to Bharathiar University) | Jul 2021 – Mar 2024
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Higher Secondary (HSE – Kerala)</h3>
              <p className="text-gray-600">Sree Durga Vilasam HSS, Peramangalam, Thrissur | Jun 2019 – Mar 2021</p>
            </div>
            <div>
              <h3 className="font-semibold">SSLC</h3>
              <p className="text-gray-600">Sree Durga Vilasam HSS, Peramangalam, Thrissur | Jun 2018 – Mar 2019</p>
            </div>
          </div>
        </div>
      </section>
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition w-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
