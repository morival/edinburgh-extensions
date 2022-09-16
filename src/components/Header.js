import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { MdPhoneIphone, MdOutlineEmail } from 'react-icons/md';
import Navbar from './Navbar';


const HeaderStyles = styled.header`
    background-color: #000000;
`;

const TopHeader = styled.div`
    margin: 0;
    padding: 0 20px;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`;
const TopHeaderItem = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    font-size: 1rem;
    color: #ffffff;
    svg {
        margin: 0 5px;
    }
`


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
            <TopHeader>
                    <TopHeaderItem><MdPhoneIphone />{phone_1}</TopHeaderItem>
                    <TopHeaderItem><MdPhoneIphone />{phone_2}</TopHeaderItem>
                    <TopHeaderItem><MdOutlineEmail />{email}</TopHeaderItem>
            </TopHeader>
            <Navbar/>
        </HeaderStyles>
    )
};
