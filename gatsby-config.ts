import type { GatsbyConfig } from "gatsby";
import sanityConfig from './studio/sanity.json'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SouthJam`,
    siteUrl: `https://southjam.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanityConfig.api.projectId,
        dataset: sanityConfig.api.dataset,
      }
    }
    ,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss"
  ]
};

export default config;
