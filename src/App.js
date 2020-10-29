import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";


import Layout from './components/layout';
import InitialSection from './components/contents/initial-section';
import About from './components/contents/about';
import Jobs from './components/contents/experience';
import Projects from './components/contents/featured';
import Contact from './components/contents/contact';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;




const App = () => {
  return (
    <Router>
      <Layout>
        <StyledMainContainer className="fillHeight">
          <InitialSection />
          <About />
          <Jobs />
          <Projects />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </Router>
  );
}


export default App;
