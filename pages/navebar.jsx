import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbaar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/update">Update Data</Nav.Link>
           
            <Nav.Link href="/addissu">Add Issue</Nav.Link>
            <Nav.Link href="/search">search</Nav.Link>
         
             
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;