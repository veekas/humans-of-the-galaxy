const axios = require('axios');

export const getPlanets = (pageNumber = 1) => {
  const url = `https://swapi.co/api/planets/?page=${pageNumber}`;
  return axios.get(url)
    .then(res => res.data.results)
    .catch(err => new Error(err.data));
};

// const axiosGetCancellableWrapper = url => {
//   axios.get(url).then(res => console.log(res));
// };

// const axiosGetCancellableWrapper = url => {
//   const { CancelToken } = axios;
//   let cancel;

//   axios.get(
//     url,
//     { cancelToken: new CancelToken(function executor(c) { cancel = c; }) },
//   ).then(res => {
//     cancel();
//     console.log(res);
//   });
// };

export const getPlanetResidents = residentUrls => {
  const promiseMap = [];
  const { CancelToken } = axios;
  const source = CancelToken.source();

  // handle cancelled
  residentUrls.map(url => promiseMap.push(axios.get(
    url,
    { cancelToken: source.token },
  ).catch(thrown => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      console.error('request not cancelled?');
    }
  })));
  // residentUrls.map(url => promiseMap.push(axios.get(url)));

  return Promise.all(promiseMap)
    .then(results => {
      const residents = [];
      results.map(resident => residents.push(resident.data));
      return residents;
    })
    .catch(err => new Error(err.message, err.data));
};
