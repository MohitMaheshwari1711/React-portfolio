import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

import { GlobalStyle, theme } from '../styles/index';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContentLink = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 18px 23px;
    outline: 0;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    overflow: auto;
    transition: var(--transition);
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children}) => {

  return (
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <SkipToContentLink href="#content">Skip to Content</SkipToContentLink>

          <StyledContent>
              <Nav />
              <Social />
              <Email />
              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>        
        </ThemeProvider>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
