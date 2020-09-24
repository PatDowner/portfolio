import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="mb-5">
        <Navbar color="info" dark expand="md">
          <NavbarToggler className="bg-dark" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link className="link text-light" to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link text-light" to="/portfolio">Portfolio</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <footer className="fixed-bottom bg-info text-light text-center">
          &copy; 2020
        </footer>
      </div>
    </Router>
  )
}

export default App
