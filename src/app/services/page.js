import React from "react";


const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and elegant UIs using React.js, Next.js, and modern JavaScript.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Developing secure and scalable APIs using Node.js and Express with MongoDB for data storage.",
    icon: "🧠",
  },
  {
    title: "Full-Stack (MERN)",
    description:
      "End-to-end development using MongoDB, Express, React, and Node.js — from database to UI.",
    icon: "⚙️",
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing secure login systems using JWT, Auth.js, and password encryption.",
    icon: "🔒",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying full-stack apps using Vercel, Render, or Cloud platforms with smooth CI/CD setup.",
    icon: "🚀",
  },
  {
    title: "Version Control (Git)",
    description:
      "Experienced with Git & GitHub for project collaboration, version control, and open-source contributions.",
    icon: "📂",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">My Services & Skills</h2>
      <p className="services-subtitle">
        I specialize in MERN stack development — creating full-stack web apps with performance and scalability in mind.
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;