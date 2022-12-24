import axios from '../axios';
const getTopDoctorHomeService = () => {
    return axios.get(`api/top-doctor-home`)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
}
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}
const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', { data: { id } })
}
const editUserService = (inputdata) => {
    return axios.put('/api/edit-user', inputdata);
}
const getAllDoctors = () => {
    return axios.get('/api/get-all-doctors');
}
const saveDetailDoctorService = (data) => {
    console.log('data', data);
    return axios.post('/api/save-infor-doctors', data);
}
export {
    getTopDoctorHomeService,
    getDetailInforDoctor,
    handleLoginApi,
    getAllUsers,
    getAllCodeService,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllDoctors,
    saveDetailDoctorService
}