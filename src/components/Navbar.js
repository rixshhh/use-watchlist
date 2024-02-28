
function Navbar() {
    return (
        <div className="header">
            <div className="logo">
                <h2>UseWatchlist</h2>
            </div>
            <div className="navDiv">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Feature</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-md-end">
                <button className="btn" type="button">SignUp</button>
            </div>
        </div>
    )
}

export default Navbar
