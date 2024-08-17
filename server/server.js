const express = require('express');
let mongoose = require('mongoose');


const bodyParser = require('body-parser');

const app = express();
const usr = require('./connection.js');
require('dotenv').config();
const cors = require('cors');
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your client's domain
  credentials: true,
};
// middlewares
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// mongo connection 
let uri = process.env.WOW_MONGO;

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'));









// homepage route
app.get('/', async (req, res) => {
    let dataf = await usr.find({});
    console.log();
    res.json(dataf);
  })



// add issu api

app.post('/post', async (req, res) => {
    try {
        const { title, status,priority,date,description} = req.body;


        const formdata =  { title, status,priority,date,description};
        console.log(date);

        let mem = await new usr(formdata);
        let data = await mem.save();
        res.send('data submited')

        console.log(data)
    }
    catch (err) {
       console.log(err)
    }


}

)




// find one function

app.post('/one',async function (req, res) {

    
 
  const query = req.body;

 let data = await usr.find(query);
  res.send(data)
  console.log(data)
  });


  app.patch('/update',async(req,res)=>{

    
    let { title,updatetitle,status,priority,date,description} = req.body;
    // let last_modified=date.toLocaleDateString()+''+ date.toLocaleTimeString();
      let data = await usr.findOne({title:updatetitle});
      title = (title === "") ? data.title : title;
      status = (status === "") ? data.status : status;
      priority = (priority === "") ? data.priority : priority;
      date = (date === "") ? data.date : date;
      description = (description === "") ? data.description : description;
    
      const formdata ={ title,status,priority,date,description};
      console.log(data)

if(data){

let upd=await usr.updateOne({title:updatetitle},{$set:formdata});
console.log(upd)
res.send('ok hia bro')


}
else{

res.send('enterr update title')

}
     
}




)
  
  // Delete api 
  // delete a documents 
app.delete('/pd/:id',async function(req, res) {
  const { id } = req.params;
  let resultd=await usr.deleteOne({_id:id})
  res.send(`Delete record with id ${id}`);
});



// delete all documents 
app.delete('/delet/all',async function(req, res) {

let resultd=await usr.deleteMany({})
res.send(`ALL RECORDS ARE DELETED`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))