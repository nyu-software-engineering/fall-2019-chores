import axios from 'axios';

import auth from './auth';

axios.interceptors.request.use(
	config => {
		const authTokenData = Auth.getToken();
		const configCopy = config;
		configCopy.headers.Authorization = authTokenData
			? `Bearer ${authTokenData.token}`
			: null;

		return configCopy;
	},
	error => Promise.reject(error)
);

axios.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401) {
			await auth.deleteToken();
			window.location.pathname = '/login';
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

const handleResponse = ({ data }) => ({ response: data });
const handleError = async ({ response: { data } }) => ({
  error: data,
});