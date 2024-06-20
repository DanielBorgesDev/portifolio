import styled from "styled-components";
import { Styles } from "../../Styles";

export const ContainerDivider = styled.div`
    max-width: 792px;
    padding:4rem 1.5rem;
    @media (${Styles.devices.mobileL}) {
        padding:4rem 0rem;
  }
`;

export const DividerLine = styled.div`
height: 3px;
background-color: #BAA89B;
`;
