var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var fs = require('fs')

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
})

app.post('/upload', upload.single('file'), function (req, res) {
  fs.unlink(req.file.path, function(err) {
    if (err) throw err
  });
  res.json({fileSize: req.file.size});
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})