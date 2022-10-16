import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt(/* Markdown-it options */);
class ManageDoctor extends Component {
    render() {
        return (
            <div className='manage-doctor-container'>
                ManageDoctor
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
