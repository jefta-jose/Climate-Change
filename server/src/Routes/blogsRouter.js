import { Router } from "express";
import { createBlog, allBlogs,  oneSpecificBlog, updateBlog, deleteBlog } from "../Controllers/blogsController.js";

const blogRouter = Router();
blogRouter.post('/createblog', createBlog);
blogRouter.get('/blogs', allBlogs);
blogRouter.get('/oneblog/:id', oneSpecificBlog); // by record id
blogRouter.put('/updateblog/:id', updateBlog);
blogRouter.delete('/deleteblog/:id', deleteBlog);
export default blogRouter;
