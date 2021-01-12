const Nav = props => {
    return (
        <div className="container-fluid bg-faded fh5co_padd_mediya padding_786">
            <div className="container padding_786">
                <nav className="navbar navbar-toggleable-md navbar-light ">
                    <button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
                    <a className="navbar-brand" href="#"><img src="images/logo.png" alt="img" className="mobile_logo_width"/></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="blog.html">Blog <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="single.html">Single <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">World <span className="sr-only">(current)</span></a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                    <a className="dropdown-item" href="#">Action in</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton3" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Community<span className="sr-only">(current)</span></a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                    <a className="dropdown-item" href="#">Action in</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="Contact_us.html">Contact <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav;