const express = require('express');
const app = experss();

app.get('/', (req, res) => {
    res.send('Welcome to Hunny Coders');
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on Port ${server.address().port}`));