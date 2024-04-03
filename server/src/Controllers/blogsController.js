import { createBlogService, allBlogsService,  onespecificBlogsService, updateBlogService, deleteBlogService } from "../Services/blogsService.js"

//controller for creating a post
export const createBlog = async (req, res) => {
    try {
        const blogDetails = {
            BlogImage: req.body.BlogImage,
            BlogTitle: req.body.BlogTitle,
            BlogSubject: req.body.BlogSubject,
            BlogContent: req.body.BlogContent,
        }

        const result = await createBlogService(blogDetails);
        if (result && result.message) {
            return res.status(500).json({ message: result.message });
        } else {
            return res.status(201).json({ message: "Blog created successfull", result })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for getting all posts
export const allBlogs = async (req, res) => {
    try {
        const result = await allBlogsService();
        if (result === 0) {
            return res.status(404).json({ message: "no Blogs availabe" })
        } else {
            return res.status(201).json({ message: "all Blogs found", result });
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for getting one Blog
export const oneSpecificBlog = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await onespecificBlogsService(id);

        if (result && result.message) {
            return res.status(500).json({ message: result.message });
        } else {
            return res.status(201).json({ message: `Blog with id ${id}`, result });
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for updating a Blog
export const updateBlog = async (req, res) => {
    try {
        const id = Number(req.params.id);

        //check if the Blog exists
        const checkBlog = await onespecificBlogsService(id);
        if (checkBlog.length === 0) {
            return res.status(404).json({ message: "Blog does not exist" })
        } else {
            let blogDetails = {
                BlogImage: req.body.BlogImage,
                BlogTitle: req.body.BlogTitle,
                BlogSubject: req.body.BlogSubject,
                BlogContent: req.body.BlogContent,
            }

            //filter out undefined values
            blogDetails = Object.fromEntries(Object.entries(blogDetails).filter(([_, value]) => value !== undefined));

            const result = await updateBlogService(id, blogDetails);
            if (result && result.message) {
                return res.status(500).json({ message: result.message })
            } else {
                return res.status(201).json({ message: `Blog with id ${id} updated`, result });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for deleting a Blog
export const deleteBlog = async (req, res) => {
    try {
        const id = Number(req.params.id);

        //check if the Blog exists
        const checkBlog = await onespecificBlogsService(id);
        if (checkBlog.length === 0) {
            return res.status(404).json({ message: "Blog does not exist" })
        } else {
            const result = await deleteBlogService(id);

            if (result === 0) {
                return res.status(404).json({ message: "Blog does not exist" });
            } else {
                return res.status(201).json({ message: `Blog with id ${id} deleted` });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}