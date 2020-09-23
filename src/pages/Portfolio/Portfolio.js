import React from 'react'
import {
  Container,
  Row
} from 'reactstrap'
import burger from '../../images/burger.jpg'
import coview19 from '../../images/coview19.png'
import employees from '../../images/employees.jpg'
import Poke_Ball from '../../images/Poke_Ball.png'
import quiz from '../../images/quiz.jpg'
import weatherApp from '../../images/weatherApp.png'
import Project from '../../components/Project'

const projects = [
  {
    title: 'Burger App',
    img: burger,
    description: 'Create a list of burgers you want to try and then mark each one off when you have devoured it.',
    deployed: 'https://aqueous-castle-96874.herokuapp.com/',
    repo: 'https://github.com/PatDowner/burger'
  },
  {
    title: 'Weather App',
    img: weatherApp,
    description: 'This is a simple weather app built with HTML, CSS, and Javascript. It utilizes the Bootstrap styling library and OpenWeather API. It shows the current weather and 5-day forecast for a searched city.A search history of 9 cities is also available down the side.',
    deployed: 'https://patdowner.github.io/weatherApp/',
    repo: 'https://github.com/PatDowner/weatherApp'
  },
  {
    title: 'COVIEW-19',
    img: coview19,
    description: 'A full stack app that allows users to rate businesses on how well they conform with COVID-19 prevention guidelines. This app was created in week 8 of my Coding Boot Camp.Built with HTML, JavaScript, CSS, Sequelize, and more. I was mostly responsible for the front end, but assisted on the back end too.',
    deployed: 'https://sleepy-forest-03534.herokuapp.com/home',
    repo: 'https://github.com/mattjavier/coview-19'
  },
  {
    title: 'Pokemon Fan Page',
    img: Poke_Ball,
    description: `<p>A Pokemon fan page where a user can pull up data on individual pokemon, search through the cards from the Pokemon trading card game, and quiz themselves on their Pokemon knowledge.</p>

<p>This app was created in week 4 of my Coding Boot Camp.It is built using HTML, CSS, and Javascript.It uses the Materialize styling library and pulls much of its information from two Pokemon- related APIs(<a href="https://pokeapi.co/">1</a>, <a href="https://pokemontcg.io/">2</a>).</p>

<p>I was responsible for the Trivia page(functionality & style) and the functionality of the Cards page.A full stack app that allows users to rate businesses on how well they conform with COVID-19 prevention guidelines. This app was created in week 8 of my Coding Boot Camp.Built with HTML, JavaScript, CSS, Sequelize, and more. I was mostly responsible for the front end, but assisted on the back end too.</p>`,
    deployed: 'https://sleepy-forest-03534.herokuapp.com/home',
    repo: 'https://github.com/mattjavier/coview-19'
  }
]

const Portfolio = () => {


  return (
    <Container fluid={true} className="container-fluid">
      <h1 className="text-muted border-bottom border-warning">Portfolio</h1>
      <Row className="card-columns">
        {projects.map(project => <Project project={project} />)}
      </Row>
    </Container>

  )
}

export default Portfolio
