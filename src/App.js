import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";

import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Akmal Hazim - WebDev Portfolio",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: `Akmal Hazim`,
        subtitle: `Full Stack Web Developer`,
        subtext: `Checkout my projects below`,
      },

      about: {
        title: `Hi there,`,
        subtitle: `UI/UX Designer - Full Stack Developer`,
        subtext: `Get to know me first`,
      },

      contact: {
        title: `Let's talk`,
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0 content" fluid={true}>

          {/**** Navbar Section *******/}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand >Akmal Hazim</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/**** Routers Section *******/}

          <Route path="/" exact render={() => <Homepage title={this.state.home.title} subtitle={this.state.home.subtitle} subtext={this.state.home.subtext} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle} subtext={this.state.about.subtext} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />


          {/**** Footer Section *******/}
          <Footer />

        </Container>
      </Router >
    );
  }
}

export default App;
