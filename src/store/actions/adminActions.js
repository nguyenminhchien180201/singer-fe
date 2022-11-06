import { getTopDoctorHomeService } from "../../services/userService";
import actionTypes from "./actionTypes";
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