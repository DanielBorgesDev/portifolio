import styled from 'styled-components';



export const CenteredContainerAboutMe = styled.div`
max-width: 49.5rem;
display: flex;
flex-direction: row;
justify-content: space-between; 
gap:3rem;
align-items: flex-start;
padding: 0 2rem;
margin: 0 auto;


`;

export const AboutMeContainer = styled.div`
    max-width: 27.375rem;
`;

export const ExperienceContainer = styled.div`
 display: flex;
 flex-direction: column;
   & > h3{
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.455em;
   }


`;
export const PastExperienceTextContainer = styled.div`
    margin-bottom: 16px;
& > h4 {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.143em;
  color:#141414;
  margin-bottom: 6px;
}
& >  h5 {
  color:#5e5e5e ;
}
`


