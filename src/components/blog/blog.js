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
          <div className="blog-title">
            <span className="title">{edge.node.frontmatter.title}</span>
            <Link className="blog-tag" path="/">
              {edge.node.frontmatter.tag}
            </Link>
          </div>
          <p>{edge.node.frontmatter.description}</p>
          <small>{edge.node.frontmatter.date} - 5 mins read</small>
          <br />

          <Link path="/">Read more</Link>
          {index !== edgesLength - 1 ? <hr /> : null}
        </Card>
      ))}
    </React.Fragment>
  )
}

export default BlogIndex
