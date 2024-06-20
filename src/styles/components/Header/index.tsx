import React from "react";
import {
  AboutMeH1,
  CenteredContainerHeader,
  ContainerTypeText,
  LinkContactMe,
  StyledMySelfImage,
  StyledGrid,
  TextArea,
  IconArrowContactMe
} from "./styles";
import TypedText from "../TypedText/index";
import Myself from "../../../assets/me.jpg";
import Northeast from "../../../assets/northEastArow.png";

const Header = () => {
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
        <LinkContactMe>
          <div>Contact Me</div>
          <IconArrowContactMe src={Northeast} alt="North east icon"/>
        </LinkContactMe>
      </TextArea>
      <StyledMySelfImage src={Myself} alt="My self picture" />
    </StyledGrid>
  </CenteredContainerHeader>
  );
};

export default Header;
