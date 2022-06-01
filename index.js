const express = require('express');
const { hello, good_bye } = require('./wasm-lib/pkg/wasm_lib.js');
const app = express();

app.get("/:name/hello", (req, res) => {
  const { name } = req.params;
  const response = hello(name);
  res.send(response);
});

app.get("/:name/goodbye", (req, res) => {
  const { name } = req.params;
  const response = good_bye(name);
  res.send(response);
});

app.listen(8080, () => console.log("listening on port 8080"));
