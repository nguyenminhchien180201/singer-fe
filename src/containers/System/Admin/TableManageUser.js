import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import 'react-markdown-editor-lite/lib/index.css';



class TableManageUser extends Component {

    render() {
        return (
            <React.Fragment>
                TableManageUser
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
