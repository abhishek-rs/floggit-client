import axios from 'axios';
import { SERVICE_URL } from '../constants';

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a non OK status code');
  }
  return response;
};

const get = id => axios.get(`${SERVICE_URL}/v1/whiteboards/${id}`)
  .then(validateStatus(200))
  .then(response => response.data)
  .catch(err => err.message);

const getAll = () => axios.get(`${SERVICE_URL}/v1/whiteboards`)
  .then(validateStatus(200))
  .then(response => response.data.map(item => ({
    // eslint-disable-next-line no-underscore-dangle
    id: item._id,
    name: item.name,
  })))
  .catch(err => err.message);

const add = value => axios({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  method: 'POST',
  url: `${SERVICE_URL}/v1/whiteboards`,
  data: JSON.stringify({ name: value }),
})
  .then(validateStatus(201))
  .then(response => response.data.id)
  .catch(err => err.message);

const update = value => axios({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  method: 'PUT',
  url: `${SERVICE_URL}/v1/whiteboards/${value.id}`,
  data: JSON.stringify({
    id: value.id,
    name: value.name,
  }),
})
  .then(validateStatus(204))
  .catch(err => err.message);

const remove = id => axios.delete(`${SERVICE_URL}/v1/whiteboards/${id}`)
  .then(validateStatus(204))
  .catch(err => err.message);


const publicAPI = {
  get,
  getAll,
  add,
  remove,
  update,
};

export default publicAPI;
