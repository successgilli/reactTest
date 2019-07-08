const express = require('express');
const path = require('path')
const app = express();
const port = parseInt(process.env.PORT,10) || 3000;
app.use(express.static(path.resolve(__dirname, './public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
