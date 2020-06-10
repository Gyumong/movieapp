import React from 'react'
import {Route,Link, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import styled from 'styled-components';

function NavBarPage() {

 
    
    return (
        <div>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>            
            
            <Route path="/" component={LandingPage} exact={true} />
            <Route path="/about" component={AboutPage}/>
            
        </div>
    )
}

export default NavBarPage
