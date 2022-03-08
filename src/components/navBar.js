import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
                <Link to ="/ReactJS" className="navbar-brand" aria-current="page">
                            My Weekend
                        </Link>
            {/* <a className="navbar-brand" href="/">My Weekend</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/ReactJS/Saturday" className="nav-link" aria-current="page">
                            Saturday
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/ReactJS/Sunday" className="nav-link" aria-current="page">
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