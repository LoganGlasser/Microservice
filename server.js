
const http = require('http');
var fs= require('fs');   //need this to store data in the .json file
const path = require('path');

const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {  //says what file to serve
  res.sendFile(path.join(__dirname, 'main.html'));
});


app.use(express.static(__dirname)); //use the files in this directory
app.use(express.json()) //whenever the server recieves a request with a json body, it will parse the json string into the corresponding json object, -async lecture




app.post('/api', function(req, res)  {
  console.log("yo this is real");
  console.log(req.body);
  let jData = fs.readFileSync('formData.json');
  let json = JSON.parse(jData); //json is now a javascript object of formData contents

  let inputData = { name: req.body.name, age: req.body.age, gender: req.body.gender}; //store the user input into the var inputData, which is temporary, aka let
  json.push(inputData); //the javascript object of the json file now has the new input
  fs.writeFileSync('formData.json', JSON.stringify(json, null, 2)); //the null, 2 arguments make it so that its not all on one line
  res.json({
    status: 'success'
  })
});

app.listen(port, () => {
  console.log('Server started on port 3000');
});


















