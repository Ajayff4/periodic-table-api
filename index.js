// This is the server file
// cheerio -> it picks HTML elements for web scraping like jquery.
// like picking images, hyperlinks and so on.
// axios -> HTTP client request (GET, POST ...)
const data = require('./data.json');
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();

app.listen(PORT, () => console.log('Server is listening on port', PORT));

app.get('/', (req, res) => {
  return res.status(200).json('Welcome to Periodic Table API. Please visit the documentation page to know how to use it https://github.com/Ajayff4/periodic-table-api')
});

app.get('/api/elements/properties', (req, res) => {
  const result = Object.keys(data[0]);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("Unable to fetch data.");
  }
});

app.get('/api/elements', (req, res) => {
  if (data) {
    return res.status(200).json(data);
  } else {
    return res.status(500).json("Unable to fetch data.");
  }
});

app.get('/api/elements/ids/:id', (req, res) => {
  const id = req.params.id;
  const result = data.filter(element => element.id == id)[0];
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("No such element found in records. Are you looki'n for a new element ???");
  }
});

app.get('/api/elements/symbols/:symbol', (req, res) => {
  const symbol = req.params.symbol.toLowerCase();
  const result = data.filter(element => element.symbol.toLowerCase() == symbol)[0];
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("No such element found in records. Are you looki'n for a new element ???");
  }
});

app.get('/api/elements/symbols', (req, res) => {
  const result = data.map(element => element.symbol);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("Unable to fetch data.");
  }
});

app.get('/api/elements/names', (req, res) => {
  const result = data.map(element => element.name);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("Unable to fetch data.");
  }
});

app.get('/api/elements/atomic-masses', (req, res) => {
  const result = data.map(element => element.atomic_mass);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("Unable to fetch data.");
  }
});

// INPUT: http://localhost:5000/api/elements/custom-properties/symbol,name,id
// OUTPUT: [{"symbol":"H","name":"hydrogen","id":1},{"symbol":"He","name":"helium","id":2},{"symbol":"Li","name":"lithium","id":3},{"symbol":"Be","name":"beryllium","id":4},{"symbol":"B","name":"boron","id":5}]
app.get('/api/elements/custom-properties/:properties', (req, res) => {
  const properties = req.params.properties.toLowerCase().split(',');
  const result = [];
  data.forEach(element => {
    let row = {};
    properties && properties.forEach(property => {
      if (element[property]) {
        row[property] = element[property];
      }
    });
    result.push(row);
  })
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json("Are you looki'n for some new mystical properties haan ???");
  }
});
