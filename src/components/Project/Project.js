import React, { useState } from 'react'
import {
  Collapse,
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap'
import burger from '../../images/burger.jpg'
import coview19 from '../../images/coview19.png'
import employees from '../../images/employees.jpg'
import Poke_Ball from '../../images/Poke_Ball.png'
import quiz from '../../images/quiz.jpg'
import weatherApp from '../../images/weatherApp.png'

const Project = props => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Col xs="4">
        <Card className="border-0">

          <Button color="info" onClick={toggle}>
            <img src={props.project.img} className="img-fluid" />
            {props.project.title}
          </Button>

          <Collapse isOpen={isOpen}>
            <CardBody className="bg-dark text-light">
              <div>{props.project.description}</div>
              <Button color="info" href={props.project.deployed} target="_blank">View App</Button>&nbsp;
              <Button color="info" href={props.project.repo} target="_blank">GitHub</Button>
            </CardBody>

          </Collapse>
        </Card>
      </Col>
    </>
  )
}

export default Project
