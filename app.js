import express from 'express';
const app = express();
const port = 3001; 


app.use((req, res, next) => {
    console.log('i am use method');
    next(); 
});

app.use((req, res, next) => {
    console.log('i am use2 method');
    next(); 
});


app.post('/login', (req, res, next) => {
    console.log('i am login method');

    res.status(200).json({
        msg: 'hello world'
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
