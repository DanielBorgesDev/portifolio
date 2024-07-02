import React from "react";
import {
  AboutMeH1,
  CenteredContainerHeader,
  ContainerTypeText,
  LinkContactMe,
  StyledMySelfImage,
  StyledGrid,
  TextArea,
  IconArrowContactMe,
} from "./styles";
import TypedText from "../TypedText/index";
import Myself from "../../../assets/me.jpg";
import Northeast from "../../../assets/northEastArow.png";

const Header = () => {
  const email = "danielborges768@hotmail.com";
  const subject = "Solicitação de Colaboração em Projeto de Desenvolvimento";
  const body = `
   Hello Daniel Borges,

 I hope this message finds you well.

 My name is [Your Name] and I am working on a project that involves [brief description of the project]. We are looking for an experienced programmer to collaborate with us and believe his skills in [specific skills or technologies] would be extremely valuable to the success of the project.

 We would like to discuss the possibility of your participation and how we can work together. Can we schedule a meeting at a time convenient for you to discuss the details?

 Please let me know your availability so we can schedule a meeting.

 Thank you in advance for your consideration and I look forward to having the opportunity to work with you.

 Yours sincerely,
 [Your name]
 [Your contact]
  `;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <CenteredContainerHeader>
      <StyledGrid>
        <TextArea>
          <AboutMeH1>
            Hello, I am Daniel Borges.
            <br />A Software Developer.
          </AboutMeH1>
          <ContainerTypeText>
            <p>$ </p>
            <TypedText />
          </ContainerTypeText>
          <LinkContactMe href={mailtoLink}>
            <div>Contact Me</div>
            <IconArrowContactMe src={Northeast} alt="North east icon" />
          </LinkContactMe>
        </TextArea>
        <StyledMySelfImage src={Myself} alt="My self picture" />
      </StyledGrid>
    </CenteredContainerHeader>
  );
};

export default Header;
