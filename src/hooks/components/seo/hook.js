import { useStaticQuery, graphql } from 'gatsby';

function useSeoDetail() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
`);
  return { data };
}

export default useSeoDetail;
