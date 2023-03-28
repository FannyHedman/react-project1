import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
`

export const NavBarInnerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
`

export const LinksContainer = styled.div`
    display: flex;
    flex: 60%;
    justify-content: flex-end;
    margin-top: 4vh;
    margin-right: 2vw;
`

export const LogoContainer = styled.div`
    display: flex;
    flex: 40%;
    margin-top: 4vh;
    margin-left: 2vw;
    font-size: 1.2rem;
`



export const NavBarLink = styled(Link)`
    margin-left: 2.5vw;
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
`
