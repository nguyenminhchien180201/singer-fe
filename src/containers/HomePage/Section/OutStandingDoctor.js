import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Slider from "react-slick";
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from "react-intl";
import * as actions from '../../../store/actions';
class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    handleViewDetailDoctor(doctor) {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            <FormattedMessage id='homepage.outstanding-doctor' />
                        </span>
                        <button className="btn-section">
                            <FormattedMessage id='homepage.more-infor' />
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let nameVi = `${item.positionData.valueVi},${item.lastName}${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn},${item.lastName}${item.firstName}`;
                                return (
                                    <div className="section-customize" key={index} onClick={() => this.handleViewDetailDoctor(item)} >
                                        <div className="customize-border">
                                            <div className="outer-bg">
                                                <div className="bg-image section-outstading-doctor"

                                                />
                                            </div>
                                            <div className="position text-center">
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>Cơ xương khớp</div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));