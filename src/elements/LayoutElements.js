import styled from 'styled-components';
import media from "styled-media-query";

export const LayoutWrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;
export const MarginAuto = styled.div`
    margin: auto;
`;
export const Flex = styled.div`
    display: flex;
`;
export const ContainerFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ContainerFlexColWrap = styled(ContainerFlexColumn)`
    flex-wrap: wrap;
`;
export const ContainerHalfMedium = styled(ContainerFlexColumn)`
    align-items: center;
    ${media.greaterThan('medium')`
        width: 50%;
    `}
`;
export const ContainerHalfLarge = styled(ContainerFlexColumn)`
    
    ${media.greaterThan('large')`
        width: 50%;
    `}
`;
export const ContainerFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
export const ContainerFlexRowWrap = styled(ContainerFlexRow)`
    flex-wrap: wrap;
`;
export const ContainerHalfMediumRow = styled(ContainerFlexRow)`
    ${media.greaterThan('medium')`
        width: 50%;
    `}
`;
export const ContainerHalfLargeRow = styled(ContainerFlexRow)`
    ${media.greaterThan('large')`
        width: 50%;
    `}
`;
export const ComponentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* padding: clamp(15px, 4vw, 50px); */
`;
export const ComponentInfoBreak = styled(ComponentInfo)`
    ${media.greaterThan('medium')`
        width: 50%;
        /* padding: clamp(20px, 2.6vw, 100px); */
    `}
`;
export const ComponentTitle = styled.div`
    padding: clamp(15px, 4vw, 50px);
`;
export const SectionBlue = styled.section`
    background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white};
`;
export const TextCenter = styled.div`
    text-align: center;
`;
export const TextLeft = styled.div`
    padding: 2em;
    text-align: left;
`;
export const TextRight = styled.div`
    text-align: right;
`;