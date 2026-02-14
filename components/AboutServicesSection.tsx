import React from "react";

const description =
  "Mystic ArtWoods Company specializes in creating unique, handcrafted wooden products that highlight exceptional artistry and craftsmanship. They offer a diverse range of items, including furniture and custom pieces tailored to individual preferences. With a focus on quality and creativity, Mystic ArtWoods transforms wood into beautiful, functional works of art.";

const services = [
  {
    title: "Custom furniture design and creation",
    desc:
      "Tailor-made furniture crafted to suit your individual style and space requirements, combining functionality with artistic design.",
  },
  {
    title: "Handcrafted wooden products",
    desc:
      "Unique, artisan-made wooden items that highlight the natural beauty of wood, offering a personal touch for any home or office.",
  },
  {
    title: "Furniture restoration and refinishing",
    desc:
      "Expert services to revive and rejuvenate your beloved furniture, ensuring its beauty and functionality for years to come.",
  },
  {
    title: "Wood carving and sculpting",
    desc:
      "Intricately crafted wooden designs that transform raw timber into stunning pieces of art, showcasing exceptional craftsmanship.",
  },
  {
    title: "Repair and maintenance of wooden items",
    desc:
      "Reliable services to fix and maintain your wooden belongings, preserving their longevity and charm.",
  },
  {
    title: "Home decor wooden accessories",
    desc:
      "Elegant wooden decor items that add warmth and character to your space, enhancing your home’s interior with natural element.",
  },
];

// SVG pattern backgrounds (as data URI, so no imports needed)
const sectionBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='487' height='243.5' viewBox='0 0 1600 800'%3E%3Cpath fill='%233B82F6' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5-.2.3-16-12.3-21-17zm123.8-505.7c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9.4-.5.5-1.3.2-1.8zM33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3h.1c7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9-.1-6.1-.1-13.2 0-19.1z' /%3E%3Cpath fill='%2355c6f6' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1-.1.3-20.3.1-27.1-.5zm425.3 328.4c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4.3-.3.2-1.1-.2-1.6zm131.1-531.9c.6.2 1.3-.2 1.4-.8v-.4c.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6v.1c-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5 5.8 1.3 12.7 2.9 18.5 4.3zm1-1.8c-.1-.1-.2-.2-.4-.2.2 0 .3.1.4.2z'/%3E%3Cg fill='%23eac5e7'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3l1.5 3.3c2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5-.4.2-.9.3-1.4.3zm40.8-51.3c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14 .4-.4.9-.6 1.4-.6z'/%3E%3C/g%3E%3C/svg%3E\")";

const cardIcon =
  "url(\"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIj3B82F6IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NTI8L3RpdGxlPjxwYXRoIGQ9Ik04MS4zMDMyOSwzOC41MjkzOUExNC4wMTgsMTQuMDE4LDAsMSwwLDYxLjQ3NywxOC43MDY3MUw0Ny4wMDMxNSwzMy4xNzkxNGExNC4wMzAzNywxNC4wMzAzNywwLDAsMCwwLDE5LjgyMTcxLDQuODAxMTMsNC44MDExMywwLDAsMS02Ljc4OTc5LDYuNzg5ODcsMjMuNjQzMjcsMjMuNjQzMjcsMCwwLDEsMC0zMy40MDE0NUw1NC42ODcyMSwxMS45MTY4NEEyMy42MjAzLDIzLjYyMDMsMCwwLDEsODguMDkzMDgsNDUuMzE5MjdMODAuOTIzOCw1Mi40ODcxMWE0LjgwMTE0LDQuODAxMTQsMCwwLDEtNi43ODk4LTYuNzg5ODdaTTExLjkwNzQxLDg4LjA5MzlhMjMuNjUwNTMsMjMuNjUwNTMsMCwwLDAsMzMuNDA1ODYtLjAwMUw1OS43ODY2NCw3My42MjE0N2EyMy42MTU4MywyMy42MTU4MywwLDAsMCwwLTMzLjQwMTQ1LDQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTc5LDYuNzg5ODgsMTQuMDE1MzEsMTQuMDE1MzEsMCwwLDEsMCwxOS44MjI2OEwzOC41MjM0OCw4MS4zMDRBMTQuMDE4LDE0LjAxOCwwLDEsMSwxOC42OTcyLDYxLjQ4MTM1TDI1Ljg2Niw1NC4zMTM1YTQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTgtNi43ODk4N2wtNy4xNjg3OSw3LjE2Nzg1QTIzLjY0NDg5LDIzLjY0NDg5LDAsMCwwLDExLjkwNzQxLDg4LjA5MzlaIj48L3BhdGg+PC9zdmc+";
export default function AboutServicesSection() {
  return (
    <section
      className="relative py-20 md:py-32"
      style={{
        background: `${sectionBg} center/cover no-repeat, linear-gradient(to bottom right, #1659c7 60%, #e0eaff 100%)`,
      }}
    >
      {/* Section Title */}
      <div className="mb-16 flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-white tracking-tight mb-6 relative">
          <span
            className="inline-block relative"
            style={{
              background:
                "linear-gradient(90deg, #c7e0fb44 0%, transparent 60%)",
              borderRadius: "0.5em 0.2em 1em 0.8em/1em 1em 0.5em 0.8em",
              padding: "0.15em 0.6em",
              zIndex: 1,
            }}
          >
            Our Services
          </span>
        </h2>
        {/* Section Description */}
        <p className="max-w-2xl text-lg md:text-xl text-white/90 font-light mb-4">{description}</p>
      </div>

      {/* Services Grid */}
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 md:px-12 relative z-10">
        {services.map(({ title, desc }, idx) => (
          <li
            key={idx}
            className="group bg-white rounded-3xl shadow-md p-7 md:p-9 relative transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl hover:bg-[#1659c7]"
          >
            <h3 className="text-[#1659c7] text-xl md:text-2xl lg:text-3xl font-semibold mb-3 transition duration-300 group-hover:text-white">{title}</h3>
            <p className="text-gray-700 text-base md:text-lg font-normal transition duration-300 group-hover:text-white">{desc}</p>
            {/* Icon corner, as before */}
            <span
              className="absolute bottom-3 right-3 w-9 h-9 rounded-br-3xl group-hover:bg-white bg-[#dbeafe] transition duration-300 flex items-center justify-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg fill='${encodeURIComponent(
                  idx % 2 === 0 ? "#1659c7" : "#3b82f6"
                )}' xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 100 100'%3E%3Cpath d='M81.3 38.5A14 14 0 1 0 61.5 18.7l-14.5 14.5a14 14 0 0 0-19.9 19.8l14.5 14.5a14 14 0 1 0 19.8 19.9l14.5-14.5a14 14 0 1 0 0-19.9z'/%3E%3C/svg%3E")`,
                backgroundSize: "26px 26px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </section>
  );
}