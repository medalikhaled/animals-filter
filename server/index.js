/* eslint-disable import/no-unresolved */
import express from "express";
import cors from 'cors'

//initilize the express app 
const app = express();
//the use keyword is to use Middleware 
app.use(cors()); //enable cors 
app.use(express.json()); //to auto parse any json that is sent to the server

//Make fake data
import Chance from 'chance'; 
const chance = new Chance();

//create an array with 250 cases (...Array(250)) with ids as their indexes (.keys())
const animals = [...Array(250).keys()].map(id => {
    //this is the data we are gonna acess from the frontend
    return {
        id, 
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
})

//API Endpoint to search for animals
app.get('', (req, res)  => {
    //Filter resilts by query 
    const q = req.query.q?.toLowerCase() || '';     //the text the user trying to search
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q) || animal.name.toLowerCase().includes(q));   //filter by animal type or name


    res.send(results);
})


app.listen(8080, () => console.log('listening on port http://localhost:8080'));