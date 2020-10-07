import React from 'react'
import {
  Container,
  Row
} from 'reactstrap'
import Project from '../../components/Project'
import burger from '../../images/burger.jpg'
import coview19 from '../../images/coview19.png'
import employees from '../../images/employees.jpg'
import Poke_Ball from '../../images/Poke_Ball.png'
import quiz from '../../images/quiz.jpg'
import weatherApp from '../../images/weatherApp.png'
import googlebooks from '../../images/googlebooks.jpg'
import plyr2 from '../../images/plyr2.jpg'

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
    description: '<p>A Pokemon fan page where a user can pull up data on individual pokemon, search through the cards from the Pokemon trading card game, and quiz themselves on their Pokemon knowledge.</p><p>This app was created in week 4 of my Coding Boot Camp.It is built using HTML, CSS, and Javascript.It uses the Materialize styling library and pulls much of its information from two Pokemon- related APIs (<a href="https://pokeapi.co/">1</a>, <a href="https://pokemontcg.io/">2</a>).</p><p>I was responsible for the Trivia page(functionality & style) and the functionality of the Cards page.',
    deployed: 'https://kalynbsimms.github.io/pokeProject/',
    repo: 'https://github.com/Kalynbsimms/pokeProject'
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
  },
  {
    title: 'React Google Books Search',
    img: googlebooks,
    alt: 'Nav bar that says GoogleBooks Search and has a link for home & saved. Saved page shows two books, Luck in the Shadows and Bone Doll Twin, both by Lynn Flewelling. Each book has a description, link for more info, and a delete button.',
    description: 'A React app that utilizes the Google Books API to allow a user to search for books and save them to a read list. Each book also appears with an external link to the book in the Google Play Store.',
    deployed: 'https://boiling-sierra-92871.herokuapp.com/',
    repo: 'https://github.com/PatDowner/googleBooksSearch'
  },
  {
    title: 'plyr 2',
    img: plyr2,
    alt: 'Website plyr 2. Profile for DrakkonOwl: World of Warcraft avatar, a bio, discord username, player handle for PSN and PC, genres, and a YouTube video. Navbar also has links to global chat, matches, and a log out. Footer copyright plyr 2, 2020. Powered by React.',
    description: '<p>A full stack React app for gamers looking for that "player 2" to play with. Users are matched based on the interests they list in their editable profile, share a YouTube video highlighting their own gaming skills, have the ability to friend each other, and are able to connect with each other via player handles listed in their profiles as well as an in-app chat board.</p><p>This app is the final project from my Coding Boot Camp. Built using React, JSX, socket.io and more.</p><p>I was mostly responsible for the front end. However, but assisted on the back end too when my team members needed it.</p>',
    deployed: 'https://plyr-2.herokuapp.com/',
    repo: 'https://github.com/mattjavier/plyr-2'
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
