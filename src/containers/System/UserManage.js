import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
class UserManage extends Component {
    render() {
        return (
            <div className="user-container">
                UserManage
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
