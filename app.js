var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve(__dirname, './public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
})
