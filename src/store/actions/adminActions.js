import { getAllUsers, getTopDoctorHomeService, getAllCodeService, createNewUserService } from "../../services/userService";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data

                })

            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILDED', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
        }
    }
}
export const fetchAllUsersSuccess = () => {
    return async (dispatch) => {
        try {
            let res = await getAllUsers();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
                    users: res.users,
                })
            } else {
                toast.error("Ferch all users error!");
                dispatch(fetchAllUserFailed());
            }
        } catch (e) {
            toast.error("Fetch all users error!1");
            dispatch(fetchAllUserFailed())
        }
    }
}
export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED
})
export const fetchGenderStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fet erroor', e);
        }
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})
export const fetchPositionStart = () => {

    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fet erroor', e);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})
export const fetchRoleStart = () => {

    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fet erroor', e);
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})
export const createNewUser = (data) => {
    return async (dispatch) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success('Create user success');
                dispatch(fetchAllUsersSuccess())
            } else {
                console.log('create user failed');
            }
        } catch (e) {
            console.log('create user failed: ', e);
        }
    }
}