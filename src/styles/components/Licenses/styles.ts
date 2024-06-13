import styled from 'styled-components';

export const CenteredContainer = styled.div`
   width: 100%;
  padding-top: 4rem; 
  padding-bottom: 4rem; 
  flex-direction: column;
  gap: 2rem;
`;
export const CenteredContainerLicenses = styled.div`
max-width: 49.5rem;
display: flex;
flex-direction: column;
justify-content: space-between; 
gap:3rem;
align-items: flex-start;
padding: 0 2rem;
margin: 0 auto;

`;
export const ContainerLicenses = styled.div`
  max-height: 20.5rem;
  width: 760px;
  margin-bottom: 16px;
  display: flex;
  gap:3rem;
  border: 1px solid #ccc; 
  border-radius: 10px;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0; 
  padding: 4px; 
  object-fit: scale-down;
  height: 120px;
  width: 120px;
`;

export const ImageStyled = styled.img`
height: 100%;
width: 100%;
`


export const TextsLicenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex-grow: 1; 
  padding: 8px; 
`;

export const TextTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.143em;
  color: #141414;
  margin-bottom: 6px;
`;

export const TextSubtitle = styled.p`
  color: #5e5e5e;
`;

export const LinkedInButton = styled.a`
    width: 12rem;
    display: flex;
    cursor:pointer;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 1.6rem;
    padding: 0 1.6rem;
    border: 1px solid #5e5e5e;
    border-radius: 10px;
    background-color: #fff; 
    user-select: none;
    text-decoration: none; 
    color: inherit;
 
    & img {
        width: 0.8rem;
        height: 1rem;
        padding-bottom: 2px;
    }
`;