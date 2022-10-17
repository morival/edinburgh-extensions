import styled from 'styled-components';
import media from 'styled-media-query';


export const ServiceDescription = styled.div`

`;
export const ServiceImage = styled.div`
    width: 100%;
`;
export const ServiceInfo = styled.div`
    width: 100%;
    padding: 20px;
`;
export const ServiceTitle = styled.h3`
    text-transform: capitalize;
`;
export const ServiceSection = styled.section`
    display: flex;
    flex-direction: ${props => props.even};
    justify-content: center;
    align-items: center;
    gap: 40px;
    ${media.lessThan('large')`
        gap: 20px;
    `}
    ${media.lessThan('medium')`
        flex-direction: column;
        gap: 20px;
    `}
`;