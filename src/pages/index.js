import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>
      My name is Michael Cacciatore. I build cool things for cool people using
      JavaScript.
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

export default IndexPage;
