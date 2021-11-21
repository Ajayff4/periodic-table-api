import axios from 'axios';

const URL = 'http://localhost:5000';

// async function getAllElements() {
//   return await axios.get(URL + '/api/elements')
//     .then(resp => resp.data)
//     .catch((err) => console.log('Error in getAllElements: ', err));
// }

function getAllElements() {
  return axios.get(`${URL}/api/elements`);
}

export { getAllElements };