import UniIcon from "../../../assets/unimontesmg_logo.jpeg";
import FreeCodeCampIcon from "../../../assets/free_code_camp_logo.jpeg";
import arrowIcon from "../../../assets/northEastArow.png";

import {
  CenteredContainer,
  CenteredContainerLicenses,
  ContainerLicenses,
  IconWrapper,
  ImageStyled,
  LinkedInButton,
  TextSubtitle,
  TextTitle,
  TextsLicenses,
} from "./styles";

const Licenses = () => {
  return (
    <CenteredContainer>
      <CenteredContainerLicenses>
        <h2>Licenses</h2>

        <ContainerLicenses>
          <IconWrapper>
            <ImageStyled src={UniIcon} alt="Icon unimontes" />
          </IconWrapper>
          <TextsLicenses>
            <TextTitle>Bachelor of Science in Information Systems</TextTitle>
            <TextSubtitle>Montes Claros State College</TextSubtitle>
            <h5>2024</h5>
            <LinkedInButton>
              <p>Show credencial</p>
              <img src={arrowIcon} alt="arrow icons" />
            </LinkedInButton>
          </TextsLicenses>
        </ContainerLicenses>

        <ContainerLicenses>
          <IconWrapper>
            <ImageStyled src={FreeCodeCampIcon} alt="Icon freecodecamp" />
          </IconWrapper>
          <TextsLicenses>
            <TextTitle>Foundational C# whit Microsoft</TextTitle>
            <TextSubtitle>freeCodeCamp</TextSubtitle>
            <h5>2023</h5>
            <LinkedInButton
              target="_blank"
              href="https://www.freecodecamp.org/certification/DanteBorges/foundational-c-sharp-with-microsoft"
            >
              <p>Show credencial</p>
              <img src={arrowIcon} alt="arrow icons" />
            </LinkedInButton>
          </TextsLicenses>
        </ContainerLicenses>

        <ContainerLicenses>
          <IconWrapper>
            <ImageStyled src={FreeCodeCampIcon} alt="Icon freecodecamp" />
          </IconWrapper>
          <TextsLicenses>
            <TextTitle>JavaScript Algorithms and Data Structures</TextTitle>
            <TextSubtitle>freeCodeCamp</TextSubtitle>
            <h5>2023</h5>
            <LinkedInButton
              target="_blank"
              href="https://www.freecodecamp.org/portuguese/certification/DanteBorges/javascript-algorithms-and-data-structures"
            >
              <p>Show credencial</p>
              <img src={arrowIcon} alt="arrow icons" />
            </LinkedInButton>
          </TextsLicenses>
        </ContainerLicenses>

        <ContainerLicenses>
          <IconWrapper>
            <ImageStyled src={FreeCodeCampIcon} alt="Icon freecodecamp" />
          </IconWrapper>
          <TextsLicenses>
            <TextTitle>Responsive Web Design</TextTitle>
            <TextSubtitle>freeCodeCamp</TextSubtitle>
            <h5>2021</h5>
            <LinkedInButton
              target="_blank"
              href="https://www.freecodecamp.org/portuguese/certification/danteborges/responsive-web-design"
            >
              <p>Show credencial</p>
              <img src={arrowIcon} alt="arrow icons" />
            </LinkedInButton>
          </TextsLicenses>
        </ContainerLicenses>
      </CenteredContainerLicenses>
    </CenteredContainer>
  );
};
export default Licenses;
