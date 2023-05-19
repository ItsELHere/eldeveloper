import { Nav, NavbarBrand, Container, NavLink, Navbar } from "react-bootstrap";


export default function NavigationBar(): JSX.Element {
  return (
    <div className="navigation-bar">
      <Navbar fixed="top">
        <Container>
          <NavbarBrand><p className="h3">Imanuel Antonio</p></NavbarBrand>
          <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}