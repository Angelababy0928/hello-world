import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './container/container';
import Content from './compoent/content';
import ContentTwo from './compoent/contentTwo';
import ContentThree from './compoent/contentThree';
import Login from './container/login';
// import { Router, Route, hashHistory , Redirect,  IndexRoute } from 'react-router';
import {Router, Route, hashHistory, Redirect, IndexRedirect, IndexRoute} from 'react-router';
import Totalreducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Super from './superManager/super';

let store=createStore(Totalreducers);
console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/super" component={Super}/>

            <Route path="/student" component={Container}>
                <IndexRoute component={Content}/>
                <Route path="repos" component={Content}/>
                <Route path="about" component={ContentTwo}/>
                <Route path="three" component={ContentThree}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);








// Redux
// import App from './App';
// import {createStore} from 'redux';
// import todo from './reducers';

// let store = createStore(todo);
//
// ReactDOM.render(
//     <App store={store}/>,
//     document.getElementById('root')
// );




// // React Redux
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import todo from './reducers';
//
// let store = createStore(todo);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
//     document.getElementById('root')
// );