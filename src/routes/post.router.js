import express from 'express';
import {prisma} from '../utils/prisma/index.js';


const router = express.Router();


router.post('/post', async(req, res, next) => {
    const {title, content} = req.body;

    const createPost = await prisma.posts.create({
        data : {
            title : title,
            content : content
        }
    })

    return res.status(200).json({data : createPost});
})


router.get('/post', async(req, res, next) => {
    const findPost = await prisma.posts.findMany({
        select : {
            title :true,
            content : true,
        }
    })
    return res.status(200).json({findPost})
})

export default router;