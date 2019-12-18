const { localStorage } = window;

const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const get = key => JSON.parse(localStorage.getItem(key));
const remove = key => localStorage.removeItem(key);

export default {
   save,
   get,
   remove,
};
