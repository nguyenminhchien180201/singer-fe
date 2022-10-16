import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserRedux.scss';
import 'react-image-lightbox/style.css';
class UserRedux extends Component {
    render() {

        return (
            <div className="user-redux-container" >
                UserRedux
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
