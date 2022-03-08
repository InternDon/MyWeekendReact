import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">My Weekend</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/Saturday" className="nav-link" aria-current="page">
                            Saturday
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/Sunday" className="nav-link" aria-current="page">
                            Sunday
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar