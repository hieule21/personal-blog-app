import React from "react"
import "./css/index.css"
import About from "../components/about/about"

import { Row, Col, Card } from "antd"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />

      <Row type="flex" justify="space-around">
        <Col lg={6} md={24} className="about">
          <Card className="card-about">
            <About />
          </Card>
        </Col>
        <Col lg={16} md={24} className="blog">
          <Card className="card-blog">Something</Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default IndexPage
