// Sanity CMS client setup
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'qcjk92eqy', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

export default sanityClient;
