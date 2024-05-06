import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 100%;
  padding-top: 4rem; 
  padding-bottom: 4rem; 
`;

export const CenteredContainerHeader = styled.div`
  max-width: 49.5rem; 
  padding-left: 1.5rem; 
  padding-right: 1.5rem; 
  margin: 0 auto; 
`;

const StyledGrid = styled.div`
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  display: grid;
`;

export const StyledMySelfImage = styled.img`
  width: 100%;
  max-width: 12.5rem;
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
  transform: translate(0);
`;

export const TextArea = styled.div`
  width: 100%;
  display: block;
  unicode-bidi: isolate;
`
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
  font-weight: 500;
  line-height: 1.143em;

  &:hover {
    ${IconArrowContactMe} {
      transform: translate(3px, -3px);
      transition: transform 0.3s ease; 
    }
  }
`;



export default StyledGrid;
