import { useStaticQuery, graphql } from 'gatsby'

export default function useAvatar() {
  const data = useStaticQuery(
    graphql`
      query Avatar {
        image: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return data.image
}
