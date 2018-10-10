import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'; 
import NotFoundPage from '../components/NotFoundPage'; 
import PortfolioPage from '../components/PortfolioPage'; 
import PortfolioItemPage from '../components/PortfolioItemPage';
import HomePage from '../components/HomePage';
import ContactPage from "../components/ContactPage"; 
import Header from '../components/Header'; 

const AppRouter  = () =>{
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                    <Route path="/portfolio/:id" component={PortfolioItemPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
n                </Switch>
            </div>   
        </BrowserRouter>
    )

} 

export default AppRouter;

