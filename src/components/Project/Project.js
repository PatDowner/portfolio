import React, { useState } from 'react'
import {
  Collapse,
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap'
import ReactHtmlParser from 'react-html-parser'

const Project = props => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Col sm="6" md="4" className="mb-3">
        <Card className="border-0">

          <Button color="secondary" onClick={toggle}>
            <img src={props.project.img} className="img-fluid" alt={props.project.alt} />
            <p>{props.project.title}</p>
          </Button>

          <Collapse isOpen={isOpen}>
            <CardBody className="bg-dark text-light">
              <div>{ReactHtmlParser(props.project.description)}</div>
              <Button color="info" href={props.project.deployed} target="_blank" className="mt-3">View App</Button>&nbsp;
              <Button color="info" href={props.project.repo} target="_blank" className="mt-3">GitHub</Button>
            </CardBody>

          </Collapse>
        </Card>
      </Col>
    </>
  )
}

export default Project
