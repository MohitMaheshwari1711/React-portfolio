import React from 'react';
import styled from 'styled-components';

import Side from './side';
import IconGitHub from './icons/github';
import IconTwitter from './icons/twitter';
import IconLinkedin from './icons/linkedin';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    padding: 10px;

    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const Social = () => (
    <Side orientation="left">
        <StyledSocialList>
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
        </StyledSocialList>
    </Side>
);


export default Social;
