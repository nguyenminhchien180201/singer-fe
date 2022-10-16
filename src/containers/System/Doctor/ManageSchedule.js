import React, { Component } from "react";
import { connect } from "react-redux";
import './ManageSchedule.scss';

import _ from "lodash";
class ManageSchedule extends Component {
    render() {

        return (
            <div className="manage-schedule-container">
                ManageSchedule
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);