import actionTypes from "../actions/actionTypes";
const initialState = {
    isLoadingGender: true,
    topDoctors: [],
    genders: [],
    roles: [],
    positions: [],

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
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            // console.log('state.genders', state.genders);
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAILDED:
            state.positions = [];
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAILDED:
            state.roles = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;