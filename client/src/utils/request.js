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

export default {
  get: (url, params = {}) =>
    axios
      .get(url, { params })
      .then(handleResponse)
      .catch(handleError),
  post: (url, payload) =>
    axios
      .post(url, payload)
      .then(handleResponse)
      .catch(handleError),
  put: (url, payload) =>
    axios
      .put(url, payload)
      .then(handleResponse)
      .catch(handleError),
  delete: url =>
    axios
      .delete(url)
      .then(handleResponse)
      .catch(handleError),
};
