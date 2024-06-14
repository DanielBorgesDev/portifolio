import styled from 'styled-components';

export const CenteredContainer = styled.div`
   width: 100%;
  padding-top: 4rem; 
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

export const SocialMediaButtons = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`


export const GithubButton = styled.a`
     width: 12rem;
    height: 4rem;
    display: flex;
    cursor:pointer;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    padding: 0 1.6rem;
    border: 1px solid #5e5e5e;
    border-radius: 10px;
    background-color: #fff; 
    user-select: none;
    text-decoration: none; 
    color: inherit;
 
    & img {
        width: 2rem;
        height: 2rem;
        padding-bottom: 2px;
    }
    & p {
        font-weight: 500;
    }
`
export const LinkedinButton = styled.a`
   width: 12rem;
   height: 4rem;
    display: flex;
    cursor:pointer;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    padding: 0 1.6rem;
    border: 1px solid #5e5e5e;
    border-radius: 10px;
    background-color: #fff; 
    user-select: none;
    text-decoration: none; 
    color: inherit;
 
    & img {
        width: 2rem;
        height: 2rem;
        padding-bottom: 2px;
    }
    & p {
        font-weight: 500;
    }
`
