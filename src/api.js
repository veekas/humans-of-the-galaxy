const axios = require('axios');

export const getPlanets = () => {
  const url = 'https://swapi.co/api/planets';
  return axios.get(url)
    .then(res => res.data.results) // example response object below
    .catch(err => new Error(err.data));
};

const axiosGetWrapperFunction = url => axios.get(url);

export const getPlanetResidents = residentUrls => {
  const promiseMap = [];
  residentUrls.map(url => promiseMap.push(axiosGetWrapperFunction(url)));
  return Promise.all(promiseMap)
    .then(results => {
      const residents = [];
      results.map(resident => residents.push(resident.data));
      return residents;
    }) // example response object below
    .catch(err => new Error(err.message, err.data));
};

// EXAMPLE PLANET OBJECT

// {
//   "name": "Alderaan",
//   "rotation_period": "24",
//   "orbital_period": "364",
//   "diameter": "12500",
//   "climate": "temperate",
//   "gravity": "1 standard",
//   "terrain": "grasslands, mountains",
//   "surface_water": "40",
//   "population": "2000000000",
//   "residents": [
//     "https://swapi.co/api/people/5/",
//     "https://swapi.co/api/people/68/",
//     "https://swapi.co/api/people/81/"
//   ],
//   "films": [
//     "https://swapi.co/api/films/6/",
//     "https://swapi.co/api/films/1/"
//   ],
//   "created": "2014-12-10T11:35:48.479000Z",
//   "edited": "2014-12-20T20:58:18.420000Z",
//   "url": "https://swapi.co/api/planets/2/"
// }

// EXAMPLE RESIDENT OBJECT

// {
//   "name": "Luke Skywalker",
//   "height": "172",
//   "mass": "77",
//   "hair_color": "blond",
//   "skin_color": "fair",
//   "eye_color": "blue",
//   "birth_year": "19BBY",
//   "gender": "male",
//   "homeworld": "https://swapi.co/api/planets/1/",
//   "films": [
//     "https://swapi.co/api/films/2/",
//     "https://swapi.co/api/films/6/",
//     "https://swapi.co/api/films/3/",
//     "https://swapi.co/api/films/1/",
//     "https://swapi.co/api/films/7/"
//   ],
//   "species": [
//     "https://swapi.co/api/species/1/"
//   ],
//   "vehicles": [
//     "https://swapi.co/api/vehicles/14/",
//     "https://swapi.co/api/vehicles/30/"
//   ],
//   "starships": [
//     "https://swapi.co/api/starships/12/",
//     "https://swapi.co/api/starships/22/"
//   ],
//   "created": "2014-12-09T13:50:51.644000Z",
//   "edited": "2014-12-20T21:17:56.891000Z",
//   "url": "https://swapi.co/api/people/1/"
// }
