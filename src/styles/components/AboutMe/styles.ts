import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 100%;
  padding-top: 4rem; 
  padding-bottom: 4rem; 
`;

export const CenteredContainerAboutMed = styled.div`
  max-width: 49.5rem; 
  padding-left: 1.5rem; 
  padding-right: 1.5rem; 
  margin: 0 auto; 
`;

const StyledGrid = styled.div`
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  display: grid;
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  transform: translate(0);
`;


export default StyledGrid;
