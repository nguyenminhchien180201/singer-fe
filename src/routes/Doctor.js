import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header/Header';
class Doctor extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='system-container'>
                    doctor
                </div>
            </React.Fragment>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
