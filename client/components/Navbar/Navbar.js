import {
  Collapse,
  Navbar as Nvbr,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
      <Nvbr color="faded" light>
        <NavbarBrand href="/" className="mr-auto">To-Be-Decided</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contributers</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Nvbr>
    </div>
  )
}

export default Navbar