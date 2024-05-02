import React from "react";
import StyledGrid, {
  AboutMeH1,
  CenteredContainer,
  CenteredContainerAboutMed,
  StyledImage,
  TextArea,
} from "./styles";
import Myself from "../../../assets/me.jpg";

const AboutMe = () => {
  return (
    <CenteredContainer>
      <CenteredContainerAboutMed>
        <StyledGrid>
          <StyledImage src={Myself} alt="Descrição da imagem" />
          <div>
            <TextArea>
              <AboutMeH1>
                Hello, I am Daniel Borges.
                <br />A Software Developer.
              </AboutMeH1>
            </TextArea>
          </div>
        </StyledGrid>
      </CenteredContainerAboutMed>
    </CenteredContainer>
  );
};

export default AboutMe;
