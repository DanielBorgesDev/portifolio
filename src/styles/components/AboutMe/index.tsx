import React from "react";
import StyledGrid, { CenteredContainer, CenteredContainerAboutMed, StyledImage } from "./styles";

const AboutMe = () => {
  return (
    <CenteredContainer>
      <CenteredContainerAboutMed>
      <StyledGrid>
        <StyledImage src="../../../assets/me.jpg" alt="Descrição da imagem" />

            
      </StyledGrid>
      </CenteredContainerAboutMed>
    </CenteredContainer>
  );
};

export default AboutMe;
