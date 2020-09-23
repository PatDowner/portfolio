import React from 'react'
import {
  Container
} from 'reactstrap'
import burger from '../../images/burger.jpg'
import coview19 from '../../images/coview19.png'
import employees from '../../images/employees.jpg'
import Poke_Ball from '../../images/Poke_Ball.png'
import quiz from '../../images/quiz.jpg'
import weatherApp from '../../images/weatherApp.png'
import Card from '../../components/Card'

const Portfolio = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <h1 className="text-muted border-bottom border-warning">Portfolio</h1>
      <Card />
    </Container>

  )
}

export default Portfolio
