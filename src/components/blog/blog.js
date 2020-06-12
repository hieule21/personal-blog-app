import React from "react"
import "./blog.css"
import "./blog.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Typography, Card, Divider } from "antd"

const { Title } = Typography

const BlogIndex = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
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
      {data.allMdx.edges.map((edge, index) => (
        <Card bordered={false} key={index} className="card-body">
          <div>
            <div className="blog-title">
              <Link to={edge.node.fields.slug} className="title">
                {edge.node.frontmatter.title}
              </Link>
              <Link className="blog-tag" to="/">
                {edge.node.frontmatter.tag}
              </Link>
            </div>
            <p>{edge.node.frontmatter.description}</p>
            <div className="blog-more">
              <small>{edge.node.frontmatter.date} - 5 mins read</small>
              <br />
              <Link to={edge.node.fields.slug}>Read more</Link>
            </div>
          </div>
          {index !== edgesLength - 1 ? <hr /> : null}
        </Card>
      ))}
    </React.Fragment>
  )
}

export default BlogIndex
