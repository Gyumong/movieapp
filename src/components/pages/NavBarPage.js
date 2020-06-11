import React from 'react'
import {Route,Link, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import styled from 'styled-components';

function NavBarPage() {

        const NavBarPageBlock = styled.div`   
        display:flex;
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
        `;
        const NavHeader = styled.div`
        max-width: 1536px;
        padding: 6px 6px;
        width: 100%;
        display: flex;
        margin: auto;
        `;

        const NavLink= styled(Link)`
        display:flex;
        width:5% ;
        padding-left: 20px;
        color: black;
        text-decoration: none;
        &:hover {
                cursor:pointer;
            }
        `;

      
    return (
        <>
        <NavBarPageBlock>
            <NavHeader>
                  <NavLink to ="/">Home</NavLink> 
                  <NavLink to="/about">about</NavLink>           
        </NavHeader>
        </NavBarPageBlock>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/about" component={AboutPage} />
            
        </>
    )
}

export default NavBarPage
