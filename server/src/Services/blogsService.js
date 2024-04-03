import { poolRequest, sql } from "../Utils/dbConnect.js";

//service for creating a report
export const createBlogService = async (blogDetails) => {
    try {
        //get the current time
        const result = await poolRequest()
            .input("BlogImage", sql.VarChar, blogDetails.BlogImage)
            .input("BlogTitle", sql.VarChar, currentTime)
            .input("BlogSubject", sql.VarChar, blogDetails.BlogSubject)
            .input("BlogContent", sql.VarChar, blogDetails.BlogContent)

        const query = `
        INSERT INTO Blogs(BlogImage, BlogTitle, BlogSubject, BlogContent)
        VALUES (@BlogImage, @BlogTitle, @BlogSubject, @BlogContent)
    `;


        await result.query(query);

        return result.recordset;

    } catch (error) {
        return error;
    }
}

//service for getting all Blogs
export const allBlogsService = async () => {
    try {
        const result = await poolRequest()
            .query("SELECT * FROM Blogs")

        return result.recordset;
    } catch (error) {
        return error;
    }
}

//service for getting one report
export const onespecificBlogsService = async (id) => {
    try {
        const result = await poolRequest()
            .input("BlogID", sql.Int, id)
            .query(`SELECT * FROM Blogs WHERE BlogID = @BlogID`)

        return result.recordset;
    } catch (error) {
        return error;
    }
}

//service for updating a record
export const updateBlogService = async (id, blogDetails) => {
    try {
        const updateFields = Object.keys(blogDetails).map(key => `${key} = @${key}`).join(', ');

        const request = poolRequest()
            .input("BlogID", sql.Int, id);

        for (const [key, value] of Object.entries(blogDetails)) {
            request.input(key, sql.VarChar(255), value);
        }

        const result = await request.query(`UPDATE Blogs SET ${updateFields} WHERE BlogID = @BlogID `);
        return result;
    } catch (error) {
        return error;
    }
}

//service for deleting a user 
export const deleteBlogService = async (id) => {
    try {
        const result = await poolRequest()
            .input("BlogID", sql.Int, id)
            .query(`DELETE FROM Blogs WHERE BlogID = @BlogID`)
        return result;
    } catch (error) {
        return error;
    }
}