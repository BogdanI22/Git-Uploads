import { Nav, Container, Navbar, NavDropdown, NavLink, NavItem } from "react-bootstrap"


export default function NavBar() {


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">EXERCISE ADVISOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/programs">Programs</Nav.Link>
                        <NavDropdown title="ProfileActions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/login">LogIn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse style={{ justifyContent: 'end' }}>
                    <Nav style={{ color: 'white' }}>
                        <NavLink>Our:</NavLink>
                        <NavLink href="www.Twitter.com">Twitter </NavLink>
                        <NavLink href="www.Instagram.com">Instagram </NavLink>
                        <NavLink href="www.GitHub.com">GitHub </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}