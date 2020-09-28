import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/wm", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
    }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established..");
});
var collection = connection.collection("Users");

app.use("/", router);

router.route('/').get((req, res) => {
    res.json("Express server is UP and Running...");
});

// const Schema = mongoose.Schema;
// let Users = new Schema({
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
// }, { versionKey: false });

// let userModel = mongoose.model('Users', Users, 'Users');

router.route('/users').get((req,res) => {
    collection.find().toArray((err, items) => {
        if(err)
            console.log(err);
        else
            res.json(items);
    });
});

router.route('/user/:name').get((req,res) => {
    collection.findOne({name: req.params.name}, function(err, items){
        if(err)
            console.log(err);
        else
            res.json(items);
    });
});

router.route('/users/add').post((req,res) => {
    // var user = new userModel(req.body);
    console.log(req.body.name);
    //user.save(function(err, data){
    collection.insertOne(req.body, (err,data) =>{
        if(err)
            console.log(err);
        else
            res.json(data);
    });
});

const collection1 = connection.collection("Products");

router.route('/products').get((req,res) => {
    collection1.find().toArray((err, items) => {
        if(err)
            console.log(err);
        else
            res.json(items);
    });
});

router.route('/product/add').post((req,res) => {
    console.log(req.body.name);
    collection1.insertOne(req.body, (err, data) => {
        if(err)
            console.log(err);
        else
            res.json(data);
    });
});

app.listen(4000, () => {
    console.log("Express server is running on port 4000");
});