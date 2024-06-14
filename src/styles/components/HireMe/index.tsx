import {
  CenteredContainer,
  CenteredContainerLicenses,
  GithubButton,
  LinkedinButton,
  SocialMediaButtons,
} from "./styles";
import githubIcon from "../../../assets/github-icon.svg";
import linkedinIcon from "../../../assets/linkedin-icon.svg";

const HireMe = () => {
  return (
    <CenteredContainer>
      <CenteredContainerLicenses>
        <h2>Hire Me</h2>
        <p>
          I appreciate you taking the time to get in touch with me. I'm looking
          forward to connecting with you and exploring how we can collaborate or
          assist each other.
        </p>
        <SocialMediaButtons>
          <GithubButton 
              target="_blank"
              href="https://github.com/DanteBorges"
          >
            <img src={githubIcon} alt="arrow icons" />
            <p>Visit my Github</p>
          </GithubButton>
          <LinkedinButton 
              target="_blank"
              href="https://www.linkedin.com/in/daniel-fborges/"
          >
            <img src={linkedinIcon} alt="arrow icons" />
            <p>Visit my Linkedin</p>
          </LinkedinButton>
        </SocialMediaButtons>
      </CenteredContainerLicenses>
    </CenteredContainer>
  );
};
export default HireMe;
