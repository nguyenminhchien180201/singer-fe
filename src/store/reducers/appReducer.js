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
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default:
            return state;
    }
}

export default appReducer;