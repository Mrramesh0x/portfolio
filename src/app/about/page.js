import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <Image
            src="/profile.jpg"
            alt="Profile Photo"
            width={200}
            height={200}
            className="about-photo"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm <strong>Sanket Kashyap</strong> — a passionate React JS Developer
            with experience in building modern, responsive, and elegant websites.
            I enjoy creating smooth UI/UX experiences and turning ideas into digital reality.
          </p>

          <div className="education-section">
            <h3>🎓 Education</h3>
            <p><strong>BCA</strong> from Dev Bhoomi Institute, Uttarakhand</p>
          </div>

          <a href={"https://wa.me/+91"} target="_blank" className="about-btn">Get in Touch →</a>
        </div>
      </div>
    </section>
  );
};

export default About;