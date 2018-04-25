import { getPlanets, getPlanetResidents } from '../api';

describe('api', () => {
  it('returns correct data when getPlanets is called', done => {
    const data = [
      {
        name: 'Jakku',
        rotation_period: 'unknown',
        orbital_period: 'unknown',
        diameter: 'unknown',
        climate: 'unknown',
        gravity: 'unknown',
        terrain: 'deserts',
        surface_water: 'unknown',
        population: 'unknown',
        residents: [],
        films: [
          'https://swapi.co/api/films/7/',
        ],
        created: '2015-04-17T06:55:57.556495Z',
        edited: '2015-04-17T06:55:57.556551Z',
        url: 'https://swapi.co/api/planets/61/',
      },
    ];

    getPlanets(7) // I chose page 7 because it has the shortest response
      .then(res => {
        expect(res).toEqual(data);
        done();
      });
  });

  it('returns correct data when getPlanetResidents is called', done => {
    const data = [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/',
        ],
        species: [
          'https://swapi.co/api/species/1/',
        ],
        vehicles: [
          'https://swapi.co/api/vehicles/14/',
          'https://swapi.co/api/vehicles/30/',
        ],
        starships: [
          'https://swapi.co/api/starships/12/',
          'https://swapi.co/api/starships/22/',
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.co/api/people/1/',
      },
    ];

    getPlanetResidents(['https://swapi.co/api/people/1'])
      .then(res => {
        expect(res).toEqual(data);
        done();
      });
  });
});
