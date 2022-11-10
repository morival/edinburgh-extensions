import styled from 'styled-components';
import { Button } from '../components/controls';


export const ContactButton = styled(Button)`

`;
export const IntroDescription = styled.div`
    max-width: 810px;
`;
export const IntroSection = styled.section`
    padding-inline: 40px;
    background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white};
`;
export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;