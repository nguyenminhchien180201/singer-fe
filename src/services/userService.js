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
export {
    getTopDoctorHomeService,
    getDetailInforDoctor,
    handleLoginApi
}