var express = require('express');
const {
  book
} = require('./book.js')

const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());


var books = [];

app.get('/', function (req, res) {
  res.json(books);
  // res.send("hello world");
});

app.post('/', function(req,res){
  var reqBody = req.body
  console.log(reqBody);
  // reqBody = JSON.parse(reqBody);
  var newbook = new book(reqBody.name,reqBody.aurthor, reqBody.dateofpublish, reqBody.numberofpages);
  books.push(newbook);
  res.send("book added successfully!!");
});

const deletebook = (nameofbook) => {
  for(let i = 0; i < books.length ; i ++ ){
    if(books[i]["name"] == nameofbook){
      books.splice(i,1);
      break;
    }
  }
}
app.delete('/',function(req,res){
  var reqBody = req.body;
  var nameofbook = reqBody.name;
  deletebook(nameofbook);
  res.send("book deleted successfully!!");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});