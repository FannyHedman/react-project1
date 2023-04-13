import { Outlet } from 'react-router-dom'
import {
    NavBarContainer,
    NavBarInnerContainer,
    LogoContainer,
    LinksContainer,
    NavBarLink
} from './styles/Navbar.style.js'

const Navbar = () => {
    return (
        <>
            <NavBarContainer>
              <NavBarInnerContainer>
                <LogoContainer>Logga</LogoContainer>
                <LinksContainer>
                        <NavBarLink to="/">Home</NavBarLink>
                        <NavBarLink to="/exhibitions">Exhibitions</NavBarLink>
                        <NavBarLink to="/about">About</NavBarLink>
                        <NavBarLink to="/about">Shop</NavBarLink>
                </LinksContainer>
                </NavBarInnerContainer>
            </NavBarContainer>
            <Outlet />
        </>
    )
}

export default Navbar
