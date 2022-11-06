import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import './Header.scss';
import _ from 'lodash';
import { adminMenu, doctorMenu } from './menuApp';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES, USER_ROLE } from '../../utils';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: adminMenu
        }
    }
    handleChangeLanguage = (language) => {
        this.props.changeLanguageApp(language);
    }

    render() {
        const { processLogout, userInfo, language } = this.props;
        return (
            <div className="header-container">
                <div className='header-tabs-container'>
                    <Navigator menus={this.state.menuApp} />
                </div>

                <div className='languages'>
                    <span className='welcome'>
                        <FormattedMessage id='homeheader.welcome' />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''}!
                    </span>
                    <span className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                    >
                        VN
                    </span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                    >
                        EN
                    </span>
                    <div className='btn btn-logout' onClick={processLogout} title='log out'>
                        <i className='fas fa-sign-out-alt' />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageApp: (language) => dispatch(actions.changeLanguageApp(language)),
        processLogout: () => dispatch(actions.processLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
