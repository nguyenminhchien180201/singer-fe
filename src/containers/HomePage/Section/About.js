import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from "react-intl";

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className='section-about-header'>
                    Truyền thông nói về chúng tôi
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/eJSD1CgHcKI"
                            title="Giới Thiệu Bệnh Viện Hoàn Mỹ Sài Gòn"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        Ra đời năm 1999 với sứ mệnh mang tới dịch vụ chăm sóc sức khỏe chất lượng cao với chi phí hợp lý, Bệnh viện Hoàn Mỹ Sài Gòn đã trở thành địa chỉ tin cậy và quen thuộc của người dân trên địa bàn TP.HCM và các tỉnh lân cận.

                        Kế thừa kinh nghiệm của Tập đoàn Y khoa Hoàn Mỹ, Bệnh viện Hoàn Mỹ Sài Gòn không ngừng phát triển và đáp ứng được các yêu cầu điều trị các bệnh phức tạp, góp phần giảm tải cho các bệnh viện trung ương. Bệnh viện đã tiếp nhận hàng ngàn lượt bệnh nhân tới khám và điều trị mỗi ngày tại các chuyên khoa của Bệnh viện.
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);