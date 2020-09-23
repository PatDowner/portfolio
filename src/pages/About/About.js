import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import me from '../../images/me.jpg'

const About = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <h1 className="text-muted border-bottom border-warning">About Me</h1>
      <Row>
        <Col xs="8" sm="4">
          <figure className="figure">
            <img src={me} className="figure-img img-fluid rounded"
              alt="White person in black tank top and rectangular black plastic rimmed glasses looking to camera's left and smiling. Their short hair falls in waves of blue, purple, and green." />
          </figure>
          <div className="row ml-0 mr-0 border resume">
            <div className="col-3 col-sm-5 col-md-3 justify-content-center d-flex align-items-center bg-info p-2">
              <i className="fas fa-file-alt fa-3x"></i>
            </div>
            <div className="col-6 col-sm-7 col-md-9 card-body p-2">
              <h5 className="card-title">Resume</h5>
              <p className="card-text">
                <a
                  href="https://docs.google.com/document/d/1vIP9ik8JjIHd3bH4vpxKyQ-ECOfNSQPZD9xdzuYfpvk/edit?usp=sharing">view</a>
              </p>
            </div>
          </div>
        </Col>
        <Col sm="8">
          <p>Hello, my name is Pat Downer. I am currently a student in a coding bootcamp course through University of
          California Irvine. My goal is to turn this period of coronavirus-induced unemployment into a new career path
          that capitalizes on my strengths and interests.</p>
          <p>After graduating from Boston University in 2007 with a bachelors degree in Deaf Studies, I taught math for
          two years. During those years, I discovered that one of my greatest strengths and interests as a teacher was
          my ability to utilize technology to create my own classroom materials.</p>
          <p>In the 10 years since then, most of which I spent working for the textbook company Pearson, I discovered that
          I enjoy the problem solving of writing formulas and filters to automate certain work tasks. Setting up these
          automated tasks became my favorite part of my last job. Realizing this was what lead me to decide to seek a
          career change into the technical field so that these sorts of tasks would become a substantial part of my
          regular work day.</p>
          <p>After this course ends in mid-October, I hope to obtain a full-time full-stack developer position either
          working with a local company/non-profit or working remotely with a local company/non-profit from another part
          of the country or world. I am also open to freelance work as well.</p>
          {/* my contact info */}
          <p>Folllow me on <a href="https://www.linkedin.com/in/pat-downer-62496715/">LinkedIn</a>, <a href="https://github.com/PatDowner">GitHub</a>, and on this site. I can also be reached <a href="mailto:pat.downer85@gmail.com">via email</a> and phone (951-539-3108).</p>
        </Col>
      </Row>
    </Container>

  )
}

export default About
