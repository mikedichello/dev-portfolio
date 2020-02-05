const express = require('express');
const app = express();

app.get('*', (req, res)=> {
    res.send('Hello World from Mike');
})

app.listen(3008, () => {
    console.log('You have connected me!')
});