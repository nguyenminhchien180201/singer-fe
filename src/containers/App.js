import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { path } from '../utils'
import DetailDoctor from './Patient/Doctor/DetailDoctor';
import Home from '../routes/Home';
import System from '../routes/System';
import HomePage from './HomePage/HomePage.js';
import Doctor from '../routes/Doctor';
import Login from './Auth/Login';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">

                        <div className="content-container">
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                <Route path={'/doctor/'} component={(Doctor)} />
                                <Route path={path.HOMEPAGE} component={HomePage} />
                                <Route path={path.DETAIL_DOCTOR} component={DetailDoctor} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);