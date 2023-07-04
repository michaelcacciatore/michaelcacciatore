import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const RedditPage = () => (
  <Layout>
    <SEO title="Re:Reddit Extension" />
    <h1>Re:Reddit Extension</h1>
    <p>
      After Reddit imploded their API on July 1, 2023, I was left wanting more from a mobile reddit experience.
    </p>
    <a style={{ display: 'block' }} href="https://github.com/michaelcacciatore">
      Github
    </a>
    <a
      style={{ display: 'block', marginBottom: '20px' }}
      href="https://www.linkedin.com/in/michael-cacciatore-347b4359/"
    >
      LinkedIn
    </a>
  </Layout>
);

export default RedditPage;
