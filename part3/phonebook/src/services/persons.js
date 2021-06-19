import axios from 'axios';

const baseUrl = 'https://superphonebook2turbo.herokuapp.com/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((res) => res.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const update = (person, newInfo) => {
  const request = axios.put(`${baseUrl}/${person._id}`, {
    ...person,
    ...newInfo,
  });
  return request.then((res) => res.data);
};

const persons = {
  getAll,
  create,
  remove,
  update,
};

export default persons;
