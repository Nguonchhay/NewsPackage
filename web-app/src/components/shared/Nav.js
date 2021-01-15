import React, { Fragment } from 'react';
import { navs } from './../../utils/constant';

const Nav = props => {

    const renderNavs = () => (
        navs.map(item => {
            return <li key={item.key} className={`nav-item ${item.active ? ' active' : ''} ${item.children ? ' dropdown' : ''}`}>
                {
                    item.children ?
                    <Fragment>
                        <a className="nav-link dropdown-toggle" href="#" id={`dropdownMenu${item.key}`} data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">{item.name} <span className="sr-only">(current)</span></a>                        
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                            {
                                item.children.map(child => {
                                    return <a className="dropdown-item" href={child.url}>{child.name}</a>
                                })
                            }
                        </div>
                    </Fragment>
                    :
                    <a className="nav-link" href={item.url}>{item.name} <span className="sr-only">(current)</span></a>
                }
            </li>
        })  
    );

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
                            { renderNavs() }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav;