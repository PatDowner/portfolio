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
    alt: 'cheeseburger with lettuce, tomato, pickles, and onions, black background',
    description: '<p>Create a list of burgers you want to try and then mark each one off when you have devoured it.</p>',
    deployed: 'https://aqueous-castle-96874.herokuapp.com/',
    repo: 'https://github.com/PatDowner/burger'
  },
  {
    title: 'Weather App',
    img: weatherApp,
    alt: 'current weather and 5-day forecast for Corona, California on August tenth, 2020',
    description: '<p>This is a simple weather app built with HTML, CSS, and Javascript. It utilizes the Bootstrap styling library and OpenWeather API.</p><p>It shows the current weather and 5-day forecast for a searched city.A search history of 9 cities is also available down the side.</p>',
    deployed: 'https://patdowner.github.io/weatherApp/',
    repo: 'https://github.com/PatDowner/weatherApp'
  },
  {
    title: 'Pokemon Fan Page',
    img: Poke_Ball,
    alt: 'red and white pokeball',
    description: '<p>A Pokemon fan page where a user can pull up data on individual pokemon, search through the cards from the Pokemon trading card game, and quiz themselves on their Pokemon knowledge.</p><p>This app was created in week 4 of my Coding Boot Camp.It is built using HTML, CSS, and Javascript.It uses the Materialize styling library and pulls much of its information from two Pokemon- related APIs (<a href="https://pokeapi.co/">1</a>, <a href="https://pokemontcg.io/">2</a>).</p><p>I was responsible for the Trivia page(functionality & style) and the functionality of the Cards page.A full stack app that allows users to rate businesses on how well they conform with COVID-19 prevention guidelines. This app was created in week 8 of my Coding Boot Camp.Built with HTML, JavaScript, CSS, Sequelize, and more. I was mostly responsible for the front end, but assisted on the back end too.</p>',
    deployed: 'https://sleepy-forest-03534.herokuapp.com/home',
    repo: 'https://github.com/mattjavier/coview-19'
  },
  {
    title: 'COVIEW-19',
    img: coview19,
    alt: 'red cartoon-looking virus blob with a darker red letter C on it',
    description: '<p>A full stack app that allows users to rate businesses on how well they conform with COVID-19 prevention guidelines.</p><p>This app was created in week 8 of my Coding Boot Camp. Built with HTML, JavaScript, CSS, Sequelize, and more.</p><p>I was mostly responsible for the front end, but assisted on the back end too.</p>',
    deployed: 'https://sleepy-forest-03534.herokuapp.com/home',
    repo: 'https://github.com/mattjavier/coview-19'
  },
  {
    title: 'Multiple Choice Quiz',
    img: quiz,
    alt: 'Quiz screen. Header: high score 6 user p l d, current score 0, time left 83 seconds. Question: Which of the following HTML tags is self-closing? Answer choices: a. li, b. a, c. img, d. p',
    description: '<p>A multiple choice quiz where you race against the clock for a high score. 90 seconds to answer as many questions as possible. A correct answer gains you a point. An incorrect answer costs you 10 seconds.</p><p>This app is built using HTML, JavaScript, and CSS.It utilizes the Bootstrap styling library.High Scores are stored on local storage as this was an assignment from before we had covered databases.</p>',
    deployed: 'https://patdowner.github.io/API_code_quiz/',
    repo: 'https://github.com/PatDowner/API_code_quiz'
  },
  {
    title: 'Team Profile Generator',
    img: employees,
    alt: 'My team. Cards for 4 employees showing employee name, role, I D number, email, and identifying information.',
    description: 'A command-line interface app that generates an HTML file that contains a profile for all entered team members.',
    deployed: 'https://drive.google.com/file/d/1XVkTNsr02XRTQ-HdJkr7iLfKr51FLtAF/view',
    repo: 'https://github.com/PatDowner/employeeSummary'
  }
]

const Portfolio = () => {


  return (
    <Container fluid={true} className="container-fluid">
      <h1 className="text-muted border-bottom border-warning">Portfolio</h1>
      <Row className="m-0">
        {projects.map(project => <Project project={project} />)}
      </Row>
    </Container>
  )
}

export default Portfolio
