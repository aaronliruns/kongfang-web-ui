import React from 'react';

import { Route, Redirect } from 'react-router-dom';


//Object destructuring
const AuthRoute = ({ component, ...rest }) => (
//Pass rest of the component paramers as object into Route
    <Route {...rest} render={(props) => (
        React.createElement(component, props)
    )} />
);

export default AuthRoute;
