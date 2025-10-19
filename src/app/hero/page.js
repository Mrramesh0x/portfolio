import React from "react";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
   <img
          src="/profile.jpg"
          alt="Profile Photo"
          className="profile-img"
          width={100}
          height={100}
        />
        <p className="intro-text">Hi! I'm Sanket Kashyap 👋</p>
        <h1 className="main-heading">
          React js Developer <br />
        </h1>
        <p className="sub-text">
          I am a Mern Stack Developer, with 1 year of experience in development
        </p>
        <div className="hero-buttons">
          <a href={"https://wa.me/+91"} target="_blank" className="btn primary">contact me →</a>
          <a href="/resume.pdf" target="_blank" className="btn outline">my resume ⬇</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;