import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomeFooter extends Component {
    render() {
        return (
            <div className="section-share section-about home-footer">
                HomeFooter
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);