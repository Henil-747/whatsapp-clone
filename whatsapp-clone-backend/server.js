//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1239778",
  key: "386c5a3f542d5101707b",
  secret: "95b84e741985151aa246",
  cluster: "ap2",
  useTLS: true
});

//middleware

app.use(express.json());
app.use(cors());

//DB config
const connURL = 'mongodb+srv://test_user:ZP5z7ZtboSeb0flH@cluster0.blv1m.mongodb.net/whatsAppDB?retryWrites=true&w=majority'
mongoose.connect(connURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//????/

const db = mongoose.connection
db.once("open", () =>{
    console.log("Db conneected");
    const msgCollection = db.collection("msgcontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) =>{
        console.log(change)
        
        if(change.operationType == "insert"){
            const msgDetails = change.fullDocument;
            pusher.trigger("messages","inserted",msgDetails);
        }
        else{
            console.log("Error trigeering pusher");
        }

    });
});


//api routes
app.get('/',(req,res) => res.status(200).send("Hiii, there"));

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage,(err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});


app.get('/messages/sync',(req,res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})



//listeners
app.listen(port,() => console.log(`listening on localhost:${port}`))