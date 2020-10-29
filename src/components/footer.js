import React from 'react';
import styled from 'styled-components';

import IconGitHub from './icons/github';
import IconTwitter from './icons/twitter';
import IconLinkedin from './icons/linkedin';


const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;


const Footer = () => {


    return (
        <StyledFooter>
            <StyledSocialLinks>
                <ul>
                    <li>
                        <a href="https://github.com/MohitMaheshwari1711" aria-label="Github">
                            <IconGitHub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohit-maheshwari-42851a123/" aria-label="Github">
                            <IconLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Mohit_1711" aria-label="Github">
                            <IconTwitter />
                        </a>
                    </li>
                </ul>
            </StyledSocialLinks>
        </StyledFooter>
    );
};


export default Footer;
