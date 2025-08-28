const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/kalviumDb';
mongoose.connect(connectString,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
})
.then(()=>{
  console.log("Mongodb is running sucessfully")
})
.catch(err=>{
  console.log(err)
})