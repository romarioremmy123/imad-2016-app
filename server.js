var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send(`<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <br>
        <div class="center text-big bold">
            Hi! I am Romario Remmy.
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>`);
});

app.get('/article-two', function (req, res) {
 
  res.send();
});

app.get('/article-three', function (req, res) {
  res.send("article three requested and will be served");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Romy.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Romy.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
