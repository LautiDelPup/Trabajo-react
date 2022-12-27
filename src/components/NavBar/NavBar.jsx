import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import navbar from "./navbar.css"

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <NavItem href="/"> The Geek Sheep </NavItem>
                    <NavItem href="/pijamas cortos">Pijamas cortos </NavItem>
                    <NavItem href="/pants animados">Pants animados </NavItem>
                    <NavItem href="/remerones">Remerones </NavItem>
                    <NavItem><CartWidget/></NavItem> 
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
