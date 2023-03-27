import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
