const ls = require('./localStorage');

const getToken = () => ls.get('auth');
const deleteToken = () => ls.remove('auth');

export default {
	getToken,
	deleteToken,
};
