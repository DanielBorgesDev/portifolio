import React from "react";
import StyledGrid, {
  AboutMeH1,
  CenteredContainer,
  CenteredContainerHeader,
  ContainerTypeText,
  LinkContactMe,
  StyledMySelfImage,
  TextArea,
  IconArrowContactMe
} from "./styles";
import TypedText from "../TypedText/index";
import Myself from "../../../assets/me.jpg";
import Northeast from "../../../assets/northEastArow.png";

const Header = () => {
  return (
    <CenteredContainer>
      <CenteredContainerHeader>
        <StyledGrid>
          <StyledMySelfImage src={Myself} alt="My self picture" />
          <div>
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
          </div>
        </StyledGrid>
      </CenteredContainerHeader>
    </CenteredContainer>
  );
};

export default Header;
