import styled from 'styled-components';
import { Section } from './ThemeElements';


export const IntroSection = styled(Section)`
    background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white};
`;