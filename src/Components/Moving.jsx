import React from 'react'

const Moving = () => {
  return (
    <div> <section className="relative h-[100rem ]  w-[30rem] flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Rotating Earth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border-[2px] border-blue-400 bg-[url('/earth.jpg')] bg-cover bg-center animate-spin-slow shadow-[0_0_60px_rgba(59,130,246,0.6)]"></div>
      </div>

      {/* Overlay for depth effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Text Section */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 animate-slideIn">
          Blanket Technologies
        </h1>
        <p className="text-lg md:text-2xl text-blue-200 max-w-xl mx-auto animate-fadeIn delay-200">
          Innovating the future with smart and sustainable solutions.
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.8s ease-in forwards;
        }
      `}</style>
    </section></div>
  )
}

export default Moving