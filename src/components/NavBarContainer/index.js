import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function NavBarContainer() {
  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 40 }}
      className="header"
    >
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="./">Lorcan McCullagh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/lorcan-mccullagh-24b127220/">
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
}
