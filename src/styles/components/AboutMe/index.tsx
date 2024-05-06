import {
  AboutMeContainer,
  CenteredContainer,
  CenteredContainerAboutMe,
} from "./styles";

const AboutMe = () => {
  return (
    <CenteredContainer>
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
      </CenteredContainerAboutMe>
    </CenteredContainer>
  );
};
export default AboutMe;
