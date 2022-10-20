import styled, { createGlobalStyle } from "styled-components";


export const theme = {
    color: {
        black: '#000000',
        brownish_orange: '#E37627',
        dark_blue: '#284389',
        dark_gray: '#3e3e49',
        gray: '#808080',
        hover: '#FAFAD2',
        lightgray: '#d3d3d3',
        orange: '#FC832B',
        social_icons: '#B9B9B9',
        white: '#ffffff',
    },
    fonts: {
        header: 'Montserrat',
        copy: 'Source Sans Pro',
    },
};
export const Section = styled.section`
    width: 100%;
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
    nav {
        background: ${({ theme }) => theme.color.dark_blue};
    }
    h1, h2, h3 {
        font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
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
`;