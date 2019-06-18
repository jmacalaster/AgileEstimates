import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthed, ...rest }) => {
    return (
        <Route
            render={props => isAuthed ?
                <Component {...props} /> :
                <Redirect to="/" />
            }
            {...rest}
        />
    )
};

export default ProtectedRoute;