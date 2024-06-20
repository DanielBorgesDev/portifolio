import React from 'react';
import {
  AboutMeContainer,
  CenteredContainerAboutMe,
  ExperienceContainer,
  PastExperienceTextContainer,
} from "./styles";

const AboutMe = () => {
  return (
    <CenteredContainerAboutMe>
      <AboutMeContainer>
        <h2>About Me</h2>
        <p>
          Hello! I'm a technology enthusiast passionate about turning ideas
          into reality through code. With a four-year journey in the world of
          software development, I've gained a solid understanding of
          fundamental principles and modern practices driving innovation in
          the digital era.
        </p>
        <p>
          I'm currently in the process of completing my undergraduate degree
          in Information Systems, a journey that has enriched my understanding
          of how technology can be applied to efficiently and creatively solve
          complex problems.
        </p>
        <p>
          Throughout my professional journey, I've had the opportunity to work
          on a variety of challenging projects, from developing robust web
          applications to implementing scalable solutions in cloud
          environments. My technical skills span various programming
          languages, frameworks, and technologies relevant to today's
          landscape, including Python, JavaScript, React, Node.js, and
          relational and non-relational databases.
        </p>
        <p>
          Furthermore, my hands-on experience has taught me the importance of
          collaboration and effective communication within multidisciplinary
          teams. I'm always open to learning from my peers and sharing my
          knowledge to drive the collective success of the project.
        </p>
        <p>
          I'm constantly seeking new challenges and opportunities to expand my
          skill set and contribute to projects that have a positive impact on
          the world. If you're looking for a committed, creative, and
          results-oriented developer, I'm ready to help take your vision to
          the next level.
        </p>
      </AboutMeContainer>
      <ExperienceContainer>
        <h3>Past experience</h3>
        <PastExperienceTextContainer>
          <h4>Software developer</h4>
          <p>LeCode · Full-time</p>
          <h5>Feb 2024 - Present</h5>
        </PastExperienceTextContainer>
        <PastExperienceTextContainer>
          <h4>Software developer</h4>
          <p>Estúdio Haus · Full-time</p>
          <h5>Feb 2022 - Jan 2024</h5>
        </PastExperienceTextContainer>
        <PastExperienceTextContainer>
          <h4>Developer in the development sector - DTI</h4>
          <p>State University of Montes Claros · Internship</p>
          <h5>Feb 2021 - Sep 2021 </h5>
        </PastExperienceTextContainer>
        <PastExperienceTextContainer>
          <h4>Social media analyst</h4>
          <p>Opportunity Soluções Digitais · Internship</p>
          <h5>Sep 2020 - Feb 2021</h5>
        </PastExperienceTextContainer>
      </ExperienceContainer>
    </CenteredContainerAboutMe>
  );
};

export default AboutMe;
