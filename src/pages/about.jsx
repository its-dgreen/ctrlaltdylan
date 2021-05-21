import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Socials from '../components/socials';

const StyledLink = styled.a`
  color: #dfdfe1;
  text-decoration: none;
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>&#60;About Me&#47;&#62;</h1>
    <p>A page about me on my website created by me. Neato.</p>
    <p>
      I&apos;m a software engineer living in Rocket City AL with my lovely wife.
      Haven&apos;t been here for too long, but it&apos;s been pretty enjoyable
      so far. Pretty good food, even better beer.
    </p>
    <p>
      I currently work at{' '}
      <StyledLink
        href="https://www.sangoma.com/"
        rel="noreferrer"
        target="_blank"
      >
        Sangoma
      </StyledLink>
      , where I work on a team of engineers managing and maintaining cloud
      infrastructure and applications.
    </p>
    <p>
      I like doing web development, I&apos;m pretty into working with Ruby on
      Rails. You can also find me using tools like Node, React, MongoDB, and
      React Native. Also like cloud stuff, specifically AWS and Heroku, and
      occassionally Firebase
    </p>
    <p>
      Outside of computer-y stuff, I like to cook... a lot. Also pretty into
      beer, Nintendo games, playing synthesizer/keyboard and bass, and playing
      with my dog. You can find pictures of him on my{' '}
      <StyledLink
        href="https://twitter.com/thisisdylandev"
        rel="noreferrer"
        target="_blank"
      >
        twitter
      </StyledLink>
      , he&apos;s a good boy.
    </p>
    <p>You can find me at the following:</p>
    <Socials />
  </Layout>
);

export default AboutPage;
