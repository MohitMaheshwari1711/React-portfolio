import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../utils/sr';
import { srConfig } from '../../config';
import IconGitHub from '../icons/github';
import IconExternal from '../icons/external';

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;

const Projects = () => {


  const featuredProjects = [
    {
      title: 'Covid-19 Tracker',
      tech: [
        "React JS",
        "React Material UI",
        "HTML & CSS"
      ],
      cover: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/4a/1223332/f72c421063e868e10ea508f106908b44-original.png',
      github: 'https://github.com/MohitMaheshwari1711/covid-tracker',
      external: 'https://covid-stat-tracker.netlify.app/',
      description: "It's a simple site that displays data related to COVID-19 cases based on country selection along with graphs and map. The data fetched are total cases, recoveries and deaths."
    },
    {
      title: 'One Stop Store',
      tech: [
        "Django",
        "jQuery",
        "HTML & CSS"
      ],
      cover: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/1e/1192401/42abbf790b22cbfce64cc31b695b51e8-original.gif',
      github: 'https://github.com/MohitMaheshwari1711/ecommerce',
      external: 'https://onestop-store.herokuapp.com/',
      description: "It's a fashion e-commerce site developed using Django, j Query, HTML and CSS. It has almost all the major functionalities of a modern eCommerce website including credit and debit card payments using stripe."
    },
    {
      title: 'One Stop Store',
      tech: [
        "React JS",
        "Node JS",
        "Express",
        "Mongodb",
        "S3",
      ],
      cover: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/5c/1083512/84aaaf17049e41800b9fe5bf4160b84a-original.png',
      github: 'https://github.com/MohitMaheshwari1711/Book-your-stay',
      external: 'https://book-your-stay.herokuapp.com/',
      description: "Airbnb Clone is a web based application to book your stay like Airbnb. The tech stack used in this project is React JS on the client side and Node JS on the server side. Mongodb is used for data storage and Amazon S3 for image storage"
    },
    {
      title: 'Github Finder',
      tech: [
        "JavaScript (ES6+)",
        "Bootstrap",
        "HTML & CSS"
      ],
      cover: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/34/1083539/be340e8031e4798864d66c86eb5774cf-original.png',
      github: 'https://github.com/MohitMaheshwari1711/Github_Finder',
      external: 'https://mohitmaheshwari1711.github.io/Github_Finder/',
      description: "It's a JavaScript project that gives a list of github repos as per the username. The total number of repositories per user is limited to 5 only. It was more part of my initital learning of javaScript"
    }
  ];

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <div>
        {featuredProjects &&
          featuredProjects.map((node, i) => {
            const { external, title, tech, github, cover, description } = node;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div className="project-description">{description}</div>

                  {tech && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <IconGitHub />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link">
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <img src={cover} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
