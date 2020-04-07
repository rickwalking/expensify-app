import React from 'react';

import { connect } from 'react-redux';

import { startLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({startLogin, startFacebookLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button button--login" onClick={startLogin}>Login with Google</button>
            <span className="break" />
            <button className="button button--login" onClick={startFacebookLogin}>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
