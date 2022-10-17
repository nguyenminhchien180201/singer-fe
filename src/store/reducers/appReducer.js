import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    language: 'vi',

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default appReducer;