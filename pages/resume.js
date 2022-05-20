import React from 'react';
import Layout from '../components/Layout';
import { StyledResumeSection } from '../styles/resume';

const Resume = ({theme, themeToggler}) => {
  return (
    <Layout theme={theme} themeToggler={themeToggler}>
      <StyledResumeSection className='experience main'>
        <h1>Experience:</h1>
        <p>
          <span>
            Senior Software Engineer — Smartly Oy — Helsinki — 2020 - Present
          </span>
          <ul>
            <li>
              Developed new product features that were crucial to meeting our
              team and company OKRs.
            </li>
            <li>
              Mentored junior developers through knowledge sharing of our shared
              services, redux architecture.
            </li>
            <li>
              Wrote reusable UI components, contributed to cleaning up tech debt
              and optimising performance and tests.
            </li>
          </ul>
        </p>
        <p>
          <span>
            Schibsted Media Group - Front End Developer — Stockholm — 2020{' '}
          </span>
          <ul>
            <li>
              Responsible for improving a major Swedish news website by
              implementing redesigns, improving site reliability, increasing our
              user subscriptions.
            </li>
            <li>
              Worked with React on top of a custom CMS and a Node client to
              fetch content.
            </li>
          </ul>
        </p>
        <p>
          <span>Food52 - Software Engineer — New York — 2017 - 2019</span>
          <ul>
            <li>
              Contributed to growing our traffic and consumer base, developed
              new features, and improved our internal CMS and e-commerce tools
              built on React and Rails.
            </li>
            <li>
              Refactored front end code from Knockout.js to React and Redux.
              Built a new cart and checkout experience that was optimised for
              mobile users and implemented third party payment tools.
            </li>
          </ul>
        </p>

        <p>
          <span>Wyng - Front End Developer — NY— 2015 - 2017</span>
          <ul>
            <li>
              Built micro-sites, email templates, and custom landing pages that
              hosted our User Generated Con- tent tools.
            </li>
          </ul>
        </p>

        <p>
          <span>Time, Inc - Front End Developer — NY— 2014 - 2015</span>
          <ul>
            <li>
              Built new templates and improved features on the Time magazine
              website that was built using Mar- ionette/Backbone.js on top of
              Wordpress for content management.
            </li>
          </ul>
        </p>
      </StyledResumeSection>
    </Layout>
  );
};

export default Resume;
