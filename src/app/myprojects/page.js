"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Meal recipe app",
    description: "A Meal Recipe APP Created Using Next JS.",
    image: "/meal.png",
    link: "https://mealapp-beta.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Online shopping platform with cart and checkout features.",
    image: "/projects.png",
    link: "#",
  },
  {
    id: 3,
    title: "Authentication App",
    description:
      "Authencation app where user can login signup and forget their password.",
    image: "/Authentication.png",
    link: "https://authentication-bice-three.vercel.app/",
  },
  {
    id: 4,
    title: "OLX Clone",
    description:
      "Full-stack OLX Clone app Created Using MongoDB Express And Next JS.",
    image: "/olx.png",
    link: "https://myads-two.vercel.app/",
  },
];

const Projects = () => {


  return (
    <section id="work" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
