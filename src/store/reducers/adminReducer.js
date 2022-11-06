import actionTypes from "../actions/actionTypes";
const initialState = {
    topDoctors: [],
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILDED:
            state.topDoctors = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default adminReducer;