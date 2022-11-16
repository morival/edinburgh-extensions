import React from 'react'
import { Navbar } from './';
import { HeaderWrapper, TopHeader, TopHeaderItem } from '../elements';
import { graphql, useStaticQuery } from 'gatsby';
import { MdPhoneIphone, MdOutlineEmail } from 'react-icons/md';


export const Header = () => {

  const data = useStaticQuery(graphql`
  query HeaderQuery {
      site {
        siteMetadata {
          contact {
            phone_1
            phone_2
            email
          }
        }
      }
    }
  `);

  const { email, phone_1, phone_2 } = data.site.siteMetadata.contact;

  return (
    <HeaderWrapper>
      <TopHeader>
        <TopHeaderItem><MdPhoneIphone />Bartek - {phone_1}</TopHeaderItem>
        <TopHeaderItem><MdPhoneIphone />Stan - {phone_2}</TopHeaderItem>
        <TopHeaderItem><MdOutlineEmail />{email}</TopHeaderItem>
      </TopHeader>
      <Navbar/>
    </HeaderWrapper>
  )
};
