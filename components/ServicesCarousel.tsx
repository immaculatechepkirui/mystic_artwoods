"use client";

import React, { useState, useEffect, useCallback } from "react";

const items = [
  { src: "/images/bed.jpg", name: "Mahogany Bed", group: "Beds" },
  { src: "/images/console.jpg", name: "Rattan Console", group: "Console Tables" },
  { src: "/images/desk.jpg", name: "Wooden Desk", group: "Desks" },
  { src: "/images/m10.jpeg", name: "Modern Seat", group: "Chairs" },
  { src: "/images/m11.jpeg", name: "Classic Table", group: "Tables" },
  { src: "/images/m12.jpeg", name: "Minimal Rack", group: "Tables" },
  { src: "/images/m13.jpeg", name: "Lounge Couch", group: "Couches" },
  { src: "/images/m14.jpeg", name: "Accent Couch", group: "Couches" },
  { src: "/images/m17.jpeg", name: "Square Table", group: "Tables" },
  { src: "/images/m18.jpeg", name: "Kid's Chair", group: "Chairs" },
  { src: "/images/m2.jpeg", name: "Kitchen Table", group: "Tables" },
  { src: "/images/m3.jpeg", name: "Office Desk", group: "Desks" },
  { src: "/images/m4.jpeg", name: "Sculpted Table", group: "Tables" },
  { src: "/images/m5.jpeg", name: "Dressing Table", group: "Tables" },
  { src: "/images/m6.jpeg", name: "Shelves Table", group: "Tables" },
  { src: "/images/m7.jpeg", name: "Cafe Table", group: "Tables" },
  { src: "/images/m8.jpeg", name: "Circular Glass Table", group: "Tables" },
  { src: "/images/m9.jpeg", name: "Upholstered Seat", group: "Seats" },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex(i => mod(i - 1, items.length));
      if (e.key === "ArrowRight") setIndex(i => mod(i + 1, items.length));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    let startX = 0;
    let endX = 0;
    function onTouchStart(e: TouchEvent) { startX = e.touches[0].clientX; }
    function onTouchEnd(e: TouchEvent) {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) setIndex(i => mod(i + 1, items.length));
      if (endX - startX > 50) setIndex(i => mod(i - 1, items.length));
    }
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  function cardClass(offset: number) {
    if (offset === 0) return "z-10 scale-110 shadow-2xl";
    if (offset === -1) return "-translate-x-[60%] -rotate-y-6 z-0 opacity-70 scale-90";
    if (offset === 1) return "translate-x-[60%] rotate-y-6 z-0 opacity-70 scale-90";
    if (offset === -2) return "-translate-x-[120%] -rotate-y-12 z-0 opacity-40 scale-75";
    if (offset === 2) return "translate-x-[120%] rotate-y-12 z-0 opacity-40 scale-75";
    return "pointer-events-none opacity-0 scale-50";
  }

  return (
    <section id="gallery" className="w-full overflow-x-hidden pt-20 pb-16 bg-white relative">
      <h2
        className="text-[2rem] md:text-[5rem] lg:text-[7.5rem] font-black uppercase tracking-tighter text-center absolute left-1/2 top-10 -translate-x-1/2 pointer-events-none whitespace-nowrap select-none"
        style={{
          background: "linear-gradient(180deg, #082a7b88 30%, #ffffff00 76%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Our Services
      </h2>
      <div className="flex items-center justify-center mt-32 relative" style={{ height: 420 }}>
        {/* Left arrow */}
        <button
          className="nav-arrow left absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#082a7bcc] hover:bg-[#082a7b] text-white text-3xl flex items-center justify-center z-20 shadow-lg transition-all"
          onClick={() => setIndex(i => mod(i - 1, items.length))}
          aria-label="Previous"
        >
          ‹
        </button>
        {/* Carousel cards */}
        <div className="carousel-track relative flex items-center justify-center w-full h-full" style={{ perspective: 1000 }}>
          {items.map((item, i) => {
            let offset = i - index;
            const n = items.length;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            return (
              <div
                key={i}
                className={`card absolute w-72 h-96 bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] ${cardClass(offset)}`}
                style={{
                  left: "50%",
                  top: 0,
                  transform: `translate(-50%, 0) ${offset === 0 ? "" : ""}`,
                }}
                onClick={() => setIndex(i)}
              >
                <img src={item.src} alt={item.name} className="w-full h-full object-cover transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          className="nav-arrow right absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#082a7bcc] hover:bg-[#082a7b] text-white text-3xl flex items-center justify-center z-20 shadow-lg transition-all"
          onClick={() => setIndex(i => mod(i + 1, items.length))}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Member info (service name & group) */}
      <div className="member-info mt-12 text-center transition-all duration-500">
        <h3 className="member-name text-[#082A7B] text-3xl font-bold inline-block relative mb-3 after:content-[''] after:absolute after:top-full after:left-[-120px] after:w-[100px] after:h-1 after:bg-[#082A7B] before:content-[''] before:absolute before:top-full before:right-[-120px] before:w-[100px] before:h-1 before:bg-[#082A7B]">
          {items[index].name}
        </h3>
        <div className="member-role uppercase text-lg text-[#8491a1] tracking-widest mt-1">{items[index].group}</div>
      </div>

      {/* Dots */}
      <div className="dots flex justify-center gap-3 mt-14">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-[#082A7B] scale-125" : "bg-[#082a7b33]"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Select image ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}