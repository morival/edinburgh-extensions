import styled from 'styled-components';


export const ServiceDescription = styled.div`

`;
export const ServiceImage = styled.div`
    width: 100%;
`;
export const ServiceInfo = styled.div`
    width: 100%;
`;
export const ServiceTitle = styled.h3`
    text-transform: capitalize;
`;
export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.even};
    justify-content: center;
    align-items: center;
`;