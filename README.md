# Star Wars API Example

## How to Run

To view the site in production, visit [people-of-the-galaxy.netlify.com](https://people-of-the-galaxy.netlify.com)

To run locally, run the following commands in the project root folder in terminal:

```bash
yarn # npm i
yarn start # npm start
```

After it compiles, visit [localhost:3000](http://localhost:3000) if your browser.

## Features

- lists planets in Star Wars universe when app mounts
- planet names expand to show residents
  - shows loading svg while waiting for API response
  - indicates lack of residents if response is empty
- paginated
- tests

## To Do

- fix no-op memory leak when user cancels request for planet residents using [Axios Cancel API](https://github.com/axios/axios#cancellation) or [axios-cancel](https://www.npmjs.com/package/axios-cancel)
