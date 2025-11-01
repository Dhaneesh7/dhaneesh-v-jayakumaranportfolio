import React from "react";
import { Github} from "lucide-react";
import { Linkedin } from "lucide-react";
export default function Intro() {
  const profiles = (e) => {
    e.preventDefault();
    window.location.href = "/profile";
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen  px-6">
      {/* Left Section - Image */}
      <div className="sm:w-1/2   w-full flex justify-end  items-center py-10 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600
 hover:scale-103 transition-transform duration-500 rounded-lg lg:rounded-r-full  shadow-lg 
       h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-auto rounded-b-[120px] sm:rounded-b-none ">
        <div className="bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full p-1 shadow-lg hover:scale-105 transition-transform duration-300 mr-20" onClick={profiles}>
          <img
            src="/dhaneesh.jpeg"
            alt="Dhaneesh V Jayakumaran"
            className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>
      </div>

      {/* Right Section - Text + Buttons */}
      <div className="sm:w-1/2 w-full flex flex-col items-center text-center p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">
          Dhaneesh V Jayakumaran
        </h1>
        <p className="text-indigo-700 text-lg mb-6 tracking-wide font-medium">
          MERN Stack Developer
        </p>
        <div className="flex gap-4 mt-2">
          <div className=" h-10 w-40  rounded-full flex flex-row">
            <div className="group flex flex-col">
 <a
  href="https://github.com/Dhaneesh7"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center bg-gray-900 text-white px-3 py-2 mr-3 rounded-full shadow-md
             transition-all duration-300 overflow-hidden 
             w-32 sm:w-10 sm:hover:w-32 sm:hover:bg-gray-800"
>
  <Github className="w-5 h-5 min-w-5 transition-transform duration-300" />
  <span
    className="ml-2 text-sm font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
               transition-opacity duration-300 whitespace-nowrap"
  >
    GitHub
  </span>
</a>


          </div>
          </div>
          

       <a
  href="https://www.linkedin.com/in/dhaneesh-v-jayakumaran"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center bg-blue-900 text-white px-3 py-2 mr-3 rounded-full shadow-md
             transition-all duration-300 overflow-hidden 
             w-32 sm:w-10 sm:hover:w-32 sm:hover:bg-blue-800"
>
  <Linkedin className="w-5 h-5 min-w-5 transition-transform duration-300" />
  <span
    className="ml-2 text-sm font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
               transition-opacity duration-300 whitespace-nowrap"
  >
    LinkedIn
  </span>
</a>

          </div>

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => (window.location.href = "/home")}
            className="bg-indigo-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
          >
            Explore
          </button>

          <a
            href="/Dhaneesh_V_Jayakumaran_CV_Resume.pdf"
            download
            className="bg-gray-900 text-white px-8 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    
    </div>
  );
}
