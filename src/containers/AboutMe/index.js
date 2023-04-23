import React from 'react';

// Placeholder for photo
// import myPhoto from '../../assets/images/my-photo.png';

function AboutMe() {
  return (
    <section id="about-me" className="section">
      <div className="section__content">
        <h2>About Me</h2>
        <div className="about-me__wrapper">
          <img className="about-me__photo" src={myPhoto} alt="My Photo" />
          <p className="about-me__bio">
            Hi, I'm Callum, a web developer based in Hobart, Australia. I'm new to coding and eager to learn and practice my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
