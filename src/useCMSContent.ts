import { useEffect, useState } from 'react';
import sanityClient from './cmsClient';

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    sanityClient.fetch('*[_type == "blogPost"]{_id, title}').then(setPosts);
  }, []);
  return posts;
}

export function useCaseStudies() {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    sanityClient.fetch('*[_type == "caseStudy"]{_id, title}').then(setCases);
  }, []);
  return cases;
}
