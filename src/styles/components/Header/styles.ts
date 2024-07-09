import styled from 'styled-components';
import { Styles } from '../../Styles';



export const CenteredContainerHeader = styled.div`
  max-width: 49.5rem;
  padding: 1.5rem;
  margin: 0 auto;
  @media (${Styles.devices.tablet}) {
    flex-direction: row; 
  }
`;

export const StyledGrid = styled.div`
  display: flex;
  gap: 2rem;


  @media (${Styles.devices.mobileL}) {
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
`;
export const TextArea = styled.div`
  display: block;
  unicode-bidi: isolate;

`

export const StyledMySelfImage = styled.img`
  max-width: 12.5rem;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
  transform: translate(0);
`;


export const AboutMeH1 = styled.div`
  color: #964b00 ;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.278em;
`
export const ContainerTypeText = styled.div`
  display: flex;
  color: #534439;
  gap:0.5rem;
  margin-top:1rem;
  margin-bottom:1rem;
  font-weight: 500;
  font-size: 1.25rem;
`

export const IconArrowContactMe = styled.img`
  width: 1rem;  
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  margin-left: 0.375rem;
  display: inline-block;
`;

export const LinkContactMe = styled.a`
  color:#000;
  cursor:pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 2em;
  text-decoration: none;
  overflow: hidden; 
  width: 10rem;
  border-radius: 1.6rem;
  padding: 0 1.6rem;
  border: 1px solid #000;
  ${IconArrowContactMe} {
      color: #000;
    }
  &:hover {
    transition: background-color 0.8s ease;
    background-color: #eae5e1;
    ${IconArrowContactMe} {
      transform: translate(3px, -3px);
    }

  }
    
`;



