import React from 'react'
import styled from 'styled-components'


const FooterStyles = styled.footer`
    text-align: center;
    padding: 1rem;
    color: ${({ theme }) => theme.color.text};
`;


export default function Footer(params) {
    return (
        <FooterStyles>Footer {new Date().getFullYear()}</FooterStyles>
    )
};
