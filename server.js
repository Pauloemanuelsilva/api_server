import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    //res.status(200).json(users);
    res.send('ok, i am here.');
});

//ip 127.0.0.1:8080
app.listen(8080);  
