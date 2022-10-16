import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
class OutStandingDoctor extends Component {

    render() {
        return (
            <div className="section-share section-outstanding-doctor">
                OutStandingDoctor
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));