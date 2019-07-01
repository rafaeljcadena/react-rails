import axios from 'axios';

// Production
// const mainAxios = axios.create({
//   baseURL: `http://app.coursechunks.com/`,
//   params: {}
// });

// locahost
const mainAxios = axios.create({
  baseURL: 'http://localhost:3000',
  params: {}
});

// mainAxios.defaults.withCredentials = true;

mainAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (error.response && error.response.status === 401) {
    // localStorage.removeItem('user');
    console.log('Error:', 401)
    window.location = '/'
  }
  return Promise.reject(error);
});

// NOTE: Usar esse padrão para as conexões
// mainAxios.defaults.headers.common['Content-Type'] = 'application/json';
// mainAxios.defaults.headers.common['coursechunks-key'] = 'c4fOfhdnhIlYf5Nr3gP85Q';
// mainAxios.interceptors.request.use(function (config) {
//   const auth = JSON.parse(localStorage.getItem('auth'))
//   if (auth) {
//     config.headers[config.method] = {
//       'access-token': auth['access-token'],
//       'client': auth['client'],
//       'uid': auth['uid']
//     }
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error)
// });

// mainAxios.interceptors.response.use(function (response) {
//   if (response.headers['access-token']) {
//     const auth = {
//       'access-token': response.headers['access-token'],
//       'client': response.headers['client'],
//       'uid': response.headers['uid']
//     }
//     localStorage.setItem('auth', JSON.stringify(auth));
//   } else {
//     localStorage.removeItem('auth');
//   }
//   return response;
// }, function (error) {
//   return Promise.reject(error)
// });


export default mainAxios