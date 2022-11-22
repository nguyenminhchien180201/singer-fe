import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './TableManageUser.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}
class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRedux: [],

        }
    }
    async componentDidMount() {
        this.props.fetchUserRedux();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser = (user) => {
    }
    handleEditUser = (user) => {
    }
    render() {
        let arrUsers = this.state.userRedux.reverse()
        return (
            <React.Fragment>
                <table id='TableManageUser'>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                            <button
                                                className='btn-delete'><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersSuccess()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
