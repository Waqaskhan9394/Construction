import { useState, useEffect } from "react";
import HeroBgImg from "../../assets/image/h1_hero.webp";

export default function Hero() {
  const upperTexts = [
    "PROFESSIONAL CONSTRUCTION SERVICES",
    "QUALITY BUILDING SOLUTIONS"
  ];
  const Maintext = [
    "ADVANCE",
    "EXPERT"
  ];

  const lowerTexts = [
    "OUR SERVICES",
    "OUR SERVICES"
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % upperTexts.length);
        setAnimate(true);
      }, 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section
  className="relative flex items-center justify-start
             min-h-[60vh] md:min-h-[80vh] lg:min-h-screen
             px-4 lg:px-10
             lg:py-50
             md:px-0
             text-white
             bg-cover bg-center"
  style={{ backgroundImage: `url(${HeroBgImg})` }}
>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 w-full max-w-6xl mx-auto">

    {/* Upper Text */}
    <div className="flex items-center gap-2 ">
      <span className="w-5 h-[2px] bg-orange-500"></span>
      <p
        className={`uppercase tracking-widest
                    text-[10px] sm:text-xs md:text-sm
                    font-semibold transition-all duration-500 ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
      >
        {upperTexts[index]}
      </p>
    </div>

    {/* Main Heading */}
   
   <h1
  className={`text-4xl sm:text-4xl md:text-6xl lg:text-9xl
              font-extrabold text-orange-600/50
              leading-[1.1]
              transition-all duration-1000 ease-out
              ${
                animate
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8 blur-xl"
              }`}
  style={{
    textShadow: "0 10px 40px rgba(0,0,0,0.9)"
  }}
>
  {Maintext[index]}
</h1>


    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-9xl
               font-extrabold stroke-text
               leading-[1.1] sm:leading-[1.15] md:leading-[1.1]
               break-words">
      CONSTRUCTION
    </h1>

    {/* Lower Text */}
    <div className="flex items-center gap-2 ">
      <span className="w-5 h-[2px] bg-orange-500"></span>
      <p
        className={`text-[11px] sm:text-xs md:text-sm
                    font-semibold transition-all duration-500 ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        {lowerTexts[index]}
      </p>
    </div>

  </div>
</section>


  );
}
