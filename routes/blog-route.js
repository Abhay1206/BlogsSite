import express from 'express';
import { deleteBlog, getAllblogs, getByUserId } from '../controllers/blog-controller';
import { addBlog } from '../controllers/blog-controller';
import {updateBlog} from '../controllers/blog-controller';
import { getById } from '../controllers/blog-controller';
 export const blogrouter = express.Router();

blogrouter.get("/",getAllblogs)

blogrouter.post('/add',addBlog)

blogrouter.put("/update/:id",updateBlog)

blogrouter.get("/:id",getById);

blogrouter.delete('/:id',deleteBlog)

blogrouter.get('/user/:id',getByUserId)

// export default blogrouter;