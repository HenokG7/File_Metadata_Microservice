var express = require('express');
var cors = require('cors');
require('dotenv').config()
const bodyParser= require("body-parser")
const multer=require("multer");
let upload=multer({ dest: './public/' })
var app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
//upfile is the name that is used in the input field name 
app.post("/api/fileanalyse",upload.single('upfile'),async(req,res)=>{
 res.json({
  name:req.file.originalname,
  type:req.file.mimetype,
  size:req.file.size
 })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
