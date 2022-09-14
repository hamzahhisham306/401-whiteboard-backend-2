'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const four=require('./error-handlers/400');
const postRoutes = require('./routes/post.routes');



app.use(postRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Home Post',
    code: 200
  })
})
app.use('*',(req,res)=>{
  
  four("this is error",req,res);
});
function start(port) {
  app.listen(port, () => console.log(`Up an running on port ${port}`));
}

module.exports = {
  start,
  app
};