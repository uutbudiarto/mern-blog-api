const express = require('express');

const app = express()
app.use(()=>{
    console.log('SERVER TEST');
})

app.listen(4000)