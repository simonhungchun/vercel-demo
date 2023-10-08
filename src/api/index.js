import http from '../utils/axios';

export const getLoginQrCKey = () => http.get('/login/qr/key');

export default {};
