## This is the server app for our starwars app

To start the server locally, you must install development dependancy "NodeMon" to keep your server running when you test all the end points.

### `run app : npm start`

Run npm start to start you the server; it runs in the port 8080

### `Test : npm test`

### Dev Routes to test : easily tested via postman

- Longest Opening Crawl : localhost:8080/films
- Most Species : localhost:8080/species
- Most Appearances : localhost:8080/most-appearance

### Deployed URL

- https://starwars-backend-mayor.herokuapp.com/{endpoint}

### Recommendation for the DB.

- appearance

  - id - number
  - film - array of object (references film collection)

- vehicles
