import React, { useState } from 'react'
import {
  Collapse,
  Button,
  Card,
  CardBody
} from 'reactstrap'
import burger from '../../images/burger.jpg'
import coview19 from '../../images/coview19.png'
import employees from '../../images/employees.jpg'
import Poke_Ball from '../../images/Poke_Ball.png'
import quiz from '../../images/quiz.jpg'
import weatherApp from '../../images/weatherApp.png'

const Project = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </>
  )
}

export default Project
