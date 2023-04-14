import { Outlet } from 'react-router-dom'
import DarkModeSwitch from './components/DarkModeSwitch.js'
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
                        <NavBarLink to="/stockpaintings">Paintings</NavBarLink>
                        <NavBarLink to="/about">Shop</NavBarLink>
                    </LinksContainer>
                    <DarkModeSwitch />
                </NavBarInnerContainer>
            </NavBarContainer>
            <Outlet />
        </>
    )
}

export default Navbar
