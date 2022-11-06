import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick';
class Specialty extends Component {

    render() {

        return (

            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...this.props.settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 2</div>
                            </div>

                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image'>

                                </div>
                                <div>Cơ xương khớp 6</div>
                            </div>
                        </Slider>
                    </div>

                </div>
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
