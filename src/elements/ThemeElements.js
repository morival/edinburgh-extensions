import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";


export const theme = {
    color: {
        black: '#000000',
        brownish_orange: '#E37627',
        dark_blue: '#1C3168',
        // dark_blue: '#284389',
        dark_gray: '#3e3e49',
        gray: '#808080',
        hover: '#FAFAD2',
        lightgray: '#d3d3d3',
        orange: '#FC832B',
        social_icons: '#B9B9B9',
        transparent_dark_blue: 'rgba(28,49,104,0.2)',
        transparent_orange: 'rgba(252,131,43,0.2)',
        white: '#ffffff',
    },
    fonts: {
        header: 'Montserrat',
        copy: 'Source Sans Pro',
    },
};
export const ComponentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 100px;
    width: 50%;
    ${media.lessThan('large')`
        padding: 30px;
    `}
    ${media.lessThan('medium')`
        padding: 50px;
        width: 100%;
    `}
    ${media.lessThan('small')`
        padding: 20px;
    `}
`
export const ComponentInfoCenter = styled(ComponentInfo)`
    width: 100%;
`;
export const SectionBlue = styled.section`
    /* padding-inline: 40px; */
    background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white};
`;
export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.white};
        border: 0;
        color: ${({ theme }) => theme.color.black};
        font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {

    }
    main {
        text-align: center;
    }
    footer {

    }
    nav {
        background: ${({ theme }) => theme.color.dark_blue};
    }
    section {
        width: 100%;
        padding-block: 50px;
        ${media.lessThan('medium')`
            /* padding-block: 0; */
        `}
    }
    h1, h2, h3, h4 {
        font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
        margin-bottom: 1rem;
        a &:hover {
            color: ${({ theme }) => theme.color.brownish_orange};
        }
    }
    ul {
        background: ${({ theme }) => theme.color.dark_blue};
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
    }
    li a {
        color: ${({ theme }) => theme.color.orange};
        :hover {
            color: ${({ theme }) => theme.color.hover};
        }
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.black};
        :hover {
            color: ${({ theme }) => theme.color.hover};
        }
    }
    button {
        background-color: ${({ theme }) => theme.color.orange};
        border-color: ${({ theme }) => theme.color.brownish_orange};
        border-radius: 5px;
        padding: 5px 10px;
        :hover {
            color: ${({ theme }) => theme.color.hover};
        }
    }
    ::placeholder {
        /* font-size: 1em; */
    }
`;