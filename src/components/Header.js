import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Navbar';


const HeaderStyles = styled.header`

`;

const TopHeaderStyles = styled.div`
        margin: 0;
        padding: 0 20px;
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        @media (max-width: 768px) {
            display: none;
        }
    div {
        padding: 5px;
    }
`;


export default function Header(params) {

    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    contact {
                        email
                        phone_1
                        phone_2
                    }
                }
            }
        }
    `);

    const { email, phone_1, phone_2 } = data.site.siteMetadata.contact;

    return (
        <HeaderStyles>
            <TopHeaderStyles>
                    <div>{phone_1}</div>
                    <div>{phone_2}</div>
                    <div>{email}</div>
            </TopHeaderStyles>
            <Navbar/>
        </HeaderStyles>
    )
};
