import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
    props.updateAuth(false);
    return (
        <Redirect to="/" />
    )
};

export default Logout;