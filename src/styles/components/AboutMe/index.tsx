import React from "react";
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
          Hello! I'm a technology enthusiast passionate about turning ideas into
          reality through code. With a journey of more than four years in the
          world of software development, I have gained a solid understanding of
          the fundamental principles and modern practices that drive innovation
          in the digital age.
        </p>
        <p>
          Furthermore, my practical experience has taught me the importance of
          collaboration and effective communication in multidisciplinary teams.
          I am always open to learning from my colleagues and sharing my
          knowledge to drive the collective success of the project.
        </p>
        <p>
          I am constantly looking for new challenges and opportunities to expand
          my skill set and contribute to projects that have a positive impact on
          the world.
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
