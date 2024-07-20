const express = require('express');
const Web3 = require('web3'); 
const ejs = require('ejs');
const app = express();


const web3 = new Web3('https://polygon-mainnet.infura.io/v3/024665bf14db4f22a74a536da59e28e1');

app.set('view engine', ejs);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});
