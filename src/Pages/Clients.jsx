// import React, { useEffect, useState } from "react";

// const clients = [
//   { name: "TELUS Digital", logo: "telus.png" },
//   { name: "Infinx Healthcare", logo: "/infinx.png" },
//   { name: "Deloitte India", logo: "/delo.png" },
//   { name: "TAVANT Technologies", logo: "/tavant.png" },
//   { name: "TCG Digital", logo: "/tcg..png" },

//   { name: "Kaleidofin", logo: "/kaleo2.jpg" },
//   { name: "IMPETUS Technologies", logo: "/impetus.png" },
//   { name: "Opkey", logo: "/opkey.png" },

//   { name: "NeoSoft Technologies", logo: "/NeoSOFT.png" },
//   { name: "ShepHertz", logo: "/Shpehrzt.png" },
//   { name: "Scrut Automation", logo: "SCRUT-.png" },
//   { name: "SourceFuse", logo: "/source.jpg" },
// ];

// const Clients = () => {
//   const [index, setIndex] = useState(0);

//   const visibleCards = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) =>
//         prev + 1 > clients.length - visibleCards ? 0 : prev + 1,
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-16 bg-gray-200 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl text-gray-700 text-center font-bold mb-10">
//           Our Clients
//         </h2>

//         {/* Slider */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${index * (100 / visibleCards)}%)`,
//             }}
//           >
//             {clients.map((client, i) => (
//               <div
//                 key={i}
//                 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 sm:px-3 lg:px-4 flex-shrink-0 flex"
//               >
//                 {/* Card */}
//                 <div
//                   className="w-full h-[140px] flex flex-col justify-center items-center 
//               bg-white p-4 rounded-2xl shadow-md 
//               hover:shadow-lg transition"
//                 >
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="h-10 sm:h-12 object-contain mb-2"
//                   />

//                   <p className="text-sm font-semibold text-center leading-tight">
//                     {client.name}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
import React, { useEffect, useState } from "react";

const clients = [
  { name: "TELUS Digital", logo: "telus.png" },
  { name: "Infinx Healthcare", logo: "/infinx.png" },
  { name: "Deloitte India", logo: "/delo.png" },
  { name: "TAVANT Technologies", logo: "/tavant.png" },
  { name: "TCG Digital", logo: "/tcg..png" },
  { name: "Kaleidofin", logo: "/kaleo2.jpg" },
  { name: "IMPETUS Technologies", logo: "/impetus.png" },
  { name: "Opkey", logo: "/opkey.png" },
  { name: "NeoSoft Technologies", logo: "/NeoSOFT.png" },
  { name: "ShepHertz", logo: "/Shpehrzt.png" },
  { name: "Scrut Automation", logo: "SCRUT-.png" },
  { name: "SourceFuse", logo: "/source.jpg" },
];

const Clients = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // ✅ Responsive cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // ✅ Auto slide (optimized timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > clients.length - visibleCards ? 0 : prev + 1
      );
    }, 2500); // better than 1000

    return () => clearInterval(interval);
  }, [visibleCards]);

  // ✅ Dynamic animation speed
  const duration = visibleCards === 1 ? 300 : 700;

  return (
    <section className="py-16 bg-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-gray-700 text-center font-bold mb-10">
          Our Clients
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex ease-in-out will-change-transform"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
              transitionDuration: `${duration}ms`,
              transitionProperty: "transform",
            }}
          >
            {clients.map((client, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 sm:px-3 lg:px-4 flex-shrink-0 flex"
              >
                {/* Card */}
                <div
                  className="w-full h-[140px] flex flex-col justify-center items-center 
                  bg-white p-4 rounded-2xl shadow-md 
                  hover:shadow-lg transition"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-10 sm:h-12 object-contain mb-2"
                  />

                  <p className="text-sm font-semibold text-center leading-tight">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;