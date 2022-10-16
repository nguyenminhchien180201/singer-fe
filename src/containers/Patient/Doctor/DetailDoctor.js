import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DetailDoctor.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from "../../../utils";
class DetailDoctor extends Component {


    render() {

        return (
            <>
                DetailDoctor
            </>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
