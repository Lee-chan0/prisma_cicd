import express from 'express';
import postRouter from '../src/routes/post.router.js';

const app = express();


app.use(express.json());


app.use('/api', [postRouter])

app.get('/', (req, res) => {
    return res.send('success~!!');
})

app.listen(3030, (req, res) => {
    console.log('CICD TEST server OPEN ')
})
