import LS from './localStorage';

const getToken = () => LS.get('auth');
const deleteToken = () => LS.remove('auth');

export default {
   getToken,
   deleteToken,
};
