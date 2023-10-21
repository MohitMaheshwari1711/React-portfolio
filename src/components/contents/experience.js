import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { srConfig } from "../../config";
import { KEY_CODES } from "../../utils/index";
import sr from "../../utils/sr";

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.ul`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--slate)")};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
    );
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    padding-left: 0;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 5px;
    font-size: var(--fz-xxl);
    font-weight: 500;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 30px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Jobs = () => {
  const company = ["TATA 1mg", "Lattice Innovations"];
  const jobsData = [
    {
      data: [
        {
          title: "Software Development Engineer - II",
          company: "TATA 1mg",
          location: "Gurugram",
          range: "June 2021 - Present",
          url: "https://www.1mg.com/",
          description: [
            "Transformed the PWA application by adopting the async reducers approach, resulting in a remarkable reduction of the app bundle size from 137 Kb to a mere 50 Kb gzipped. This implementation led to a substantial boost in code coverage by almost 25% and decreased LFC by 1 second.",
            'Created a method similar to "getServerSideProps"in Next JS for 1mg PWA application to seamlessly render a server side rendered page.',
            "Developed a webpack plugin that removes server side code from client build, there by reducing the size of build by 10%.",
            "Led the initiative to transition from monolithic architecture to mono-repo architecture, leveraging the turborepo tool; optimized CI/CD pipelines, resulting in a 20% reduction in deployment time and improved overall team productivity.",
            "Lead an agile team of developers, implementing coding standards and conducting regular code reviews, resulting in a 15% reduction in code complexity and improved overall system performance.",
            "Redesigned company's mobile homepage and product detail page, resulting in a 30% increase in user engagement and a 25% decrease in bounce rate over a 6-month period.",
            "Streamlined web-view efficiency through the implementation of progressive loading techniques, significantly reducing latency and improving page rendering speed by 30% in regions with limited network coverage.",
            "Introduced skeletons for web pages to prevent cumulative layout shift (CLS) taking it down to 0.",
            "Engineered the successful collaboration between cross-functional teams to integrate 1mg with TATA Neu app, driving a staggering increase of 3000 daily orders.",
            "Analyzed and optimized website performance metrics, resulting in decrease in page load times and a 25% increase in user engagement, driving higher conversion rates and revenue growth.",
            "Consolidated and maintained technical documentation.",
            "Wrote test cases for react app using jest in TDD approach.",
            "Implemented and updated application modules under the direction of Senior Software Developers."
          ],
        },
        {
          title: "Software Developer",
          company: "Lattice Innovations",
          location: "New Delhi",
          range: "Feb 2019 - May 2021",
          url: "https://www.thelattice.in/",
          description: [
            "Developed new web app features, functionality, and capabilities using the Angular 2+ framework.",
            "Spearheaded requirements gathering and validation for a game-changing external web app, fine-tuning UI/UX aspects to address client needs; facilitated a seamless transition to development phase, minimizing risks, and achieving optimal project outcomes.",
            "Implemented seamless integration with multiple third-party services and external APIs, leveraging complex libraries like Socket.IO for real-time data visualization; reduced code duplicity and increased project efficiency by 40%.",
            "Profiling, troubleshooting and bug fixes resulting in system performance and scalability improvements."
          ],
        },
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
      e.preventDefault();
      // Move up
      if (e.key === KEY_CODES.ARROW_UP) {
        setTabFocus(tabFocus - 1);
      }
      // Move down
      if (e.key === KEY_CODES.ARROW_DOWN) {
        setTabFocus(tabFocus + 1);
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          {company &&
            company.map((company, i) => {
              return (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={(el) => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                </li>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        {jobsData &&
          jobsData[0].data.map((node, i) => {
            const { title, url, company, range, description } = node;

            return (
              <CSSTransition
                key={i}
                in={activeTabId === i}
                timeout={250}
                classNames="fade"
              >
                <StyledTabContent
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>
                  <ul>
                    {description &&
                      description.map((desc, i) => {
                        return <li key={i}>{desc}</li>;
                      })}
                  </ul>
                </StyledTabContent>
              </CSSTransition>
            );
          })}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
