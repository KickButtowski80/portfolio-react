import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return(
        <div>
           This is from my dashboard component 
        </div>
    )
}

const AddExpensePage = () => {
    return(
        <div>
           This is from my add exchangePage component 
        </div>
    )
}

const EditExpensePage = () => {
    return(
        <div>
           This is from my edit exchangePage component 
        </div>
    )
}

const HelpPage = () => {
    return(
        <div>
           This is from my Help component 
        </div>
    )
}

const NotFoundPage = () => {
    return(
        <div>
            404! not found 
        </div>
    )
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        
    
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
