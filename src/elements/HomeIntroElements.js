import styled from 'styled-components';
import { Button } from '../components/controls';
import { Section } from './ThemeElements';


export const ContactButton = styled(Button)`

`;
export const IntroDescription = styled.div`
    max-width: 800px;
`;
export const IntroSection = styled(Section)`
    padding-inline: 80px;
    padding-block: 40px;
    background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white};
`;
export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;