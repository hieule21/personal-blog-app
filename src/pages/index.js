import React from "react"
import "./css/index.css"
import { About, Blog } from "../components"

import { Row, Col, Card } from "antd"
import { SEO } from "../components"

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
        <Col lg={14} md={24} className="blog">
          <Card className="card-blog">
            <Blog />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default IndexPage
