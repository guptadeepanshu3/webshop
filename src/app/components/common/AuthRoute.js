// Deepanshu
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

function AuthRoute(props) {
    let {
        authenticated,
        exact,
        path, 
        component
    } = props;
    return (
            <React.Fragment>
                <Route path={path}
                       exact = {exact || false}
                       render = { (props) => authenticated
                                        ? React.createElement(component, props)
                                        : <Redirect to="/login" />

                        } />
            </React.Fragment>
    )
}

export default AuthRoute;   