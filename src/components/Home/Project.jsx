import React, { useState } from "react";

import Project1 from "../../assets/image/project1.webp";
import Project2 from "../../assets/image/project2.webp";
import Project3 from "../../assets/image/project3.webp";
import Project4 from "../../assets/image/project4.webp";
import Project5 from "../../assets/image/project5.webp";
import Project6 from "../../assets/image/project6.webp";

const projectsData = [
  { id: 1, image: Project1, title: "Modern Building", category: "big" },
  { id: 2, image: Project2, title: "Interior Design", category: "interior" },
  { id: 3, image: Project3, title: "Corporate Office", category: "recent" },
  { id: 4, image: Project4, title: "Big Construction", category: "big" },
  { id: 5, image: Project5, title: "Park Area", category: "park" },
  { id: 6, image: Project6, title: "City Park", category: "park" },
];

const  ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ===== Top Section ===== */}
        <div className="grid lg:grid-cols-2 items-center gap-6 mb-16">

          {/* Left - Heading */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-[#0e132a] relative z-10">
              Our Projects
            </h2>

            {/* Background Stroke Text */}
            <span className="absolute -top-6 left-0 text-4xl md:text-6xl font-extrabold text-gray-200 uppercase opacity-20">
              Gallery
            </span>
          </div>

          {/* Right - Filter Menu */}
          <div className="flex lg:justify-end flex-wrap gap-6 text-sm font-semibold uppercase">

            <span
              onClick={() => setActiveCategory("all")}
              className={`cursor-pointer transition ${
                activeCategory === "all"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Show All
            </span>

            <span
              onClick={() => setActiveCategory("interior")}
              className={`cursor-pointer transition ${
                activeCategory === "interior"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Interior
            </span>

            <span
              onClick={() => setActiveCategory("recent")}
              className={`cursor-pointer transition ${
                activeCategory === "recent"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Recent
            </span>

            <span
              onClick={() => setActiveCategory("big")}
              className={`cursor-pointer transition ${
                activeCategory === "big"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Big Building
            </span>

            <span
              onClick={() => setActiveCategory("park")}
              className={`cursor-pointer transition ${
                activeCategory === "park"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              Park
            </span>

          </div>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="group relative overflow-hidden bg-white"
    >

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[380px] object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Bottom Content */}
      <div className="relative bg-gray-100 p-6 transition duration-500 group-hover:bg-[#2f4b7c]">

        <h3 className="text-xl font-bold text-[#0e132a] group-hover:text-white transition">
          {project.title}
        </h3>

        <p className="text-sm text-blue-500 group-hover:text-white transition">
          Factory
        </p>

        {/* Plus Icon */}
        <div className="absolute -top-4 right-6 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
            +
          </div>
        </div>

      </div>

    </div>
  ))}

</div>

      </div>
    </section>
  );
};

export default ProjectSection;