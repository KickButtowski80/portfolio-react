import React from 'react' ;
import { Link } from 'react-router-dom';
import {BrowserRouter, Route,Switch} from 'react-router-dom'; 

const PortfolioPage = (props) => {
    return(
        <div>
            <h1>My Work</h1>
            <p>Checking the following things I have done please</p>
            <Link to='/portfolio/1'>Item one</Link>
            <Link to='/portfolio/2'>Item two</Link>
         
        </div>
    )
}

export default PortfolioPage;