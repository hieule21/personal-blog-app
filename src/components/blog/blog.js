import React from "react"
import "./blog.css"
import "./blog.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card } from "antd"

const BlogIndex = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
          edges {
            node {
              id
              fields {
                slug
                readingTime {
                  text
                }
              }
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                path
                title
                description
                tag
              }
            }
          }
        }
      }
    `
  )
  const edgesLength = data.allMdx.edges.length
  return (
    <React.Fragment>
      {data.allMdx.edges.map(({ node }, index) => (
        <Card bordered={false} key={index} className="card-body">
          <div>
            <div className="blog-title">
              <Link to={node.fields.slug} className="title">
                {node.frontmatter.title}
              </Link>
              <Link to="/">
                <div className="blog-tag">{node.frontmatter.tag}</div>
              </Link>
            </div>
            <p>{node.frontmatter.description}</p>
            <div className="blog-more">
              <small>
                {node.frontmatter.date} - {node.fields.readingTime.text}
              </small>
              <br />
              <Link className="link" to={node.fields.slug}>
                Read more
              </Link>
            </div>
          </div>
          {index !== edgesLength - 1 ? <hr /> : null}
        </Card>
      ))}
    </React.Fragment>
  )
}

export default BlogIndex
