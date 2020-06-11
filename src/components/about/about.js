import React from "react"
import "./About.css"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiFillCodeSandboxCircle, AiFillMediumCircle } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { DownloadOutlined } from "@ant-design/icons"
import { Typography, Row, Col, Button, Tooltip, Divider } from "antd"

const { Title, Paragraph } = Typography
const About = () => {
  const data = useStaticQuery(
    graphql`
      query Avatar {
        image: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 64, height: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  //Render
  return (
    <React.Fragment>
      <Img
        fixed={data.image.childImageSharp.fixed}
        style={{ marginBottom: "16px", borderRadius: "50%" }}
        alt="Avatar"
      ></Img>
      {/* <Avatar
        size={64}
        src={avatar}
        style={{ marginBottom: "16px" }}
        alt="Avatar"
      ></Avatar> */}
      <Title level={4} className="title" type="primary">
        Hieu Le
      </Title>
      <Paragraph className="about-text">
        I am an aspiring developer and interested in full-stack web development.
        I enjoy writing blogs as a note for myself and sharing my knowledge. I
        like playing League Of Legends and skateboarding.
      </Paragraph>
      <Divider dashed="true"></Divider>
      <Row type="flex" justify="start" className="icon-btn-group">
        <Col md={4} lg={8}>
          <Tooltip title="Github">
            <Button
              shape="circle"
              icon={<FaGithub className="icon" />}
            ></Button>
          </Tooltip>
        </Col>
        <Col md={4} lg={8}>
          <Tooltip title="Linkedin">
            <Button
              shape="circle"
              icon={<FaLinkedinIn className="icon" />}
            ></Button>
          </Tooltip>
        </Col>
        <Col md={4} lg={8}>
          <Tooltip title="Leetcode">
            <Button
              shape="circle"
              icon={<AiFillCodeSandboxCircle className="icon" />}
            ></Button>
          </Tooltip>
        </Col>
        <Col md={4} lg={8}>
          <Tooltip title="Medium">
            <Button
              shape="circle"
              icon={<AiFillMediumCircle className="icon" />}
            ></Button>
          </Tooltip>
        </Col>
        <Col md={4} lg={8}>
          <Tooltip title="Email">
            <Button shape="circle" icon={<MdEmail className="icon" />}></Button>
          </Tooltip>
        </Col>
        <Col md={4} lg={8}>
          <Tooltip title="Facebook">
            <Button
              shape="circle"
              icon={<FaFacebookSquare className="icon" />}
            ></Button>
          </Tooltip>
        </Col>
      </Row>
      <div className="btn-group">
        <Button
          className="action-btn"
          type="primary"
          icon={<DownloadOutlined />}
        >
          My CV
        </Button>
        <Button className="action-btn">Message me</Button>
      </div>
      <Divider dashed="true"></Divider>
      <div className="footer">
        <p>@ {new Date().getFullYear()} Hieu Le. All rights reserved.</p>
        <p>
          Built with{" "}
          <a
            href="https://ant.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Design{" "}
          </a>
          and{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </p>
      </div>
    </React.Fragment>
  )
}

export default About
