# "Humans" of the Galaxy

## a React/Node.js example app using the Star Wars API

To view the site in production, visit [humans-of-the-galaxy.netlify.com](https://humans-of-the-galaxy.netlify.com)

### How to Run

To run locally, run the following commands in the project root folder in your terminal:

```bash
yarn # npm i
yarn start # npm start
```

After it compiles, visit [localhost:3000](http://localhost:3000) if your browser.

To test, run `yarn test` in your terminal.

### Features

- lists planets in Star Wars universe when app mounts
- planet names expand to show residents
  - shows loading svg while waiting for API response
  - indicates lack of residents if response is empty
- paginated through all planets
- automated snapshot tests
