import { poolRequest, sql } from "../Utils/dbConnect.js"

export const createInitiativesService = async (InitiativesDetails) => {
    try {
        const currentDate = new Date().toISOString().slice(0, 10); // Get current date in "YYYY-MM-DD" format

        const result = await poolRequest()
            .input("Title", sql.VarChar, InitiativesDetails.Title)
            .input("Tag", sql.VarChar, InitiativesDetails.Tag)
            .input("Date", sql.Date, currentDate)

        const query = `
            INSERT INTO Initiatives (Title, Tag, Date)
            VALUES (@Title, @Tag, @Date)
        `;
        await result.query(query);

        return { message: "Initiative created successfully" }; // Return a success message
    } catch (error) {
        return error;
    }
};

//service for getting all Initiativess
export const allInitiativessService = async () => {
    try {
        const result = await poolRequest()
            .query("SELECT * FROM Initiatives")

        return result.recordset;
    } catch (error) {
        return error;
    }
}

//service for getting one Initiatives
export const onespecificInitiativesService = async (id) => {
    try {
        const result = await poolRequest()
            .input("InitiativeID", sql.Int, id)
            .query(`SELECT * FROM Initiatives WHERE InitiativeID = @InitiativeID`)

        return result.recordset;
    } catch (error) {
        return error;
    }
}

//service for updating a record
export const upTagInitiativesService = async (id, InitiativesDetails) => {
    try {
        const updateFields = Object.keys(InitiativesDetails).map(key => `${key} = @${key}`).join(', ');

        const request = poolRequest()
            .input("InitiativeID", sql.Int, id);

        for (const [key, value] of Object.entries(InitiativesDetails)) {
            request.input(key, sql.VarChar(255), value);
        }

        const result = await request.query(`UPDATE Initiatives SET ${updateFields} WHERE InitiativeID = @InitiativeID `);
        return result;
    } catch (error) {
        return error;
    }
}

//service for deleting a user 
export const deleteInitiativesService = async (id) => {
    try {
        const result = await poolRequest()
            .input("InitiativeID", sql.Int, id)
            .query(`DELETE FROM Initiatives WHERE InitiativeID = @InitiativeID`)
        return result;
    } catch (error) {
        return error;
    }
}