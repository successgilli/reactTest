import express from 'express';
import path from 'path'
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname, '../public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
