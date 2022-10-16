import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import './Header.scss';
import { LANGUAGES } from '../../utils';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
class Header extends Component {

    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container">

                header

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
