import express from 'express';
import path from 'path'
const app = express();
const port = 8080;
app.use(express.static('public'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
app.listen(process.env.Port || port, () => {
    console.log(`listening on port ${port}`)
})
