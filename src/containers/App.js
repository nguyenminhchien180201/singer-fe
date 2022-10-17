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
class App extends Component {

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">

                        <div className="content-container">
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.SYSTEM} component={(System)} />
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);