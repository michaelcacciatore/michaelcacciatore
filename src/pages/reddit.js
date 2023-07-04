import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const RedditPage = () => (
  <Layout>
    <SEO title="Re:Reddit Extension" />
    <h1>Re:Reddit Extension</h1>
    <p>
      After Reddit imploded their API on July 1, 2023, I was left wanting more
      from a mobile reddit experience.
    </p>
    <p>
      These are the current features of the Re:Reddit browser extension
      (currently in early access):
    </p>
    <ul>
      <li>Redirects reddit.com to old.reddit.com</li>
      <li>Disables custom subreddit styles</li>
      <li>Makes numerous CSS tweaks for a more optimized mobile experience</li>
      <li>
        Coming soon: A from the ground up replacement for reddit&apos;s mobile
        experience
      </li>
    </ul>
    <p>
      These changes might not be ideal for everyone, but they work for me when I
      browse reddit.
    </p>
    <p>For support, message me on <a href="https://www.reddit.com/message/compose/?to=reohh">reddit</a></p>
     <a
       style={{ display: 'block', marginBottom: '20px' }}
       href="https://apps.apple.com/us/app/re-reddit/id6450933367"
     >
       View on App Store
     </a>
  </Layout>
);

export default RedditPage;
