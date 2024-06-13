import {
  CenteredContainer,
  CenteredContainerLicenses,
  GithubButton,
  LinkedinButton,
} from "./styles";
import { ReactComponent as githubIcon } "../../../assets/";
import linkedinIcon from "../../../assets/";

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
        <GithubButton>
          <p>Visit my Github</p>
          <img src={githubIcon} alt="arrow icons" />
        </GithubButton>
        <LinkedinButton>
          <p>Visit my Linkedin</p>
          <img src={linkedinIcon} alt="arrow icons" />
        </LinkedinButton>
      </CenteredContainerLicenses>
    </CenteredContainer>
  );
};
export default HireMe;
