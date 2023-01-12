import React from 'react';
import { graphql } from 'gatsby';
import { ComponentTitle, TextLeft } from '../elements';

export default function Terms({ data: { site: { siteMetadata: { contact, siteTitle, siteUrl } } } }) {

    const { city } = contact;

    return (
        <main>
            <section>
                <ComponentTitle>
                    <h3>Terms and Conditions</h3>
                </ComponentTitle>
                <TextLeft>
                    <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern { siteTitle }’ relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
                    <p>The term ‘{ siteTitle }’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is in { city }. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.</p>
                    <p>The use of this website is subject to the following terms of use:</p>
                    <div>•	The content of the pages of this website is for your general information and use only. It is subject to change without notice.</div>
                    {/* <div>•	This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</div> */}
                    <div>•	Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</div>
                    <div>•	Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</div>
                    <div>•	This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</div>
                    <div>•	All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</div>
                    <div>•	Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</div>
                    <div>•	From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</div>
                    <div>•	Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</div>
                </TextLeft>
            </section>
        </main>
    )
};

export const query = graphql`
    query TermsQuery {
        site {
            siteMetadata {
                siteTitle
                siteUrl
                contact {
                    city
                }
            }
        }
    }  
`;