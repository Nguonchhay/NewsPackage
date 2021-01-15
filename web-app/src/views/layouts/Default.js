import React, { Fragment } from 'react';

import HeaderTop from '../../components/shared/HeaderTop';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import FooterBottom from '../../components/shared/FooterBottom';
import GoToTop from '../../components/shared/GoToTop';
import Nav from '../../components/shared/Nav';

const DefaultLayout = props => {
    return (
        <Fragment>
            <HeaderTop />
            <Header />
            <Nav />

            {props.children}

            <Footer />
            <FooterBottom />
            <GoToTop />
        </Fragment>
    )
}

export default DefaultLayout;