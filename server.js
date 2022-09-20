const express = require('express')
const app = express();
const path = require('path');
const {conn, Patient, Provider} = require('./db')

app.use(express.json())
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/patients', async(req,res,next) => {
    try{
        res.send(await Patient.findAll());
    }
    catch(e){
        next(e)
    }
})

app.get('/api/providers', async(req,res,next) => {
    try{
        res.send(await Provider.findAll());
    }
    catch(e){
        next(e)
    }
})

app.use('/', async(error, req,res,next) => {
    try {
        res.status(404);
    }
    catch(error){
        console.log(error)
    }
})

const init = async() => {
    try{
        await conn.sync({force: true});
        await Promise.all([
            Patient.create({name: 'Han', age: 25}),
            Patient.create({name: 'Gamma', age: 65}),
            Patient.create({name: 'Epsilon', age: 5}),
            Provider.create({name: 'Delta', specialty: 'rectologist'}),
            Provider.create({name: 'Zeta', specialty: 'radiology fellow'}),
            Provider.create({name: 'Mu', specialty: 'intern of an internist'})
        ]);
        app.listen(5000, () => console.log(`listening on port 5000`))
    }
        catch(e){
            console.log(e)
        }
}

init();
