import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
      <Layout>
        <Hero showPerson />
        <Posts posts={posts} title="Recent Published" />
      </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          readTime
          slug
          image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`




export default IndexPage
