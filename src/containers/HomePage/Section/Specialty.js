import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class Specialty extends Component {

    render() {

        return (

            <div className='section-specialty'>
                specialty
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
export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
