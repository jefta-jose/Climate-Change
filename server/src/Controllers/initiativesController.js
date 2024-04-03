import { createInitiativesService, allInitiativessService, onespecificInitiativesService, upTagInitiativesService, deleteInitiativesService } from "../Services/initiativesService.js";

//controller for creating a Initiatives
export const createInitiative = async (req, res) => {
    try {
        const InitiativesDetails = {
            Title: req.body.Title,
            Tag: req.body.Tag,
            Date: req.body.Date,
        }

        const result = await createInitiativesService(InitiativesDetails); // Await the result here
        if (result && result.message) {
            return res.status(500).json({ message: result.message })
        } else {
            return res.status(201).json({ message: "Initiative created successfully", result })
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

//controller for getting all Initiativess
export const allInitiatives = async (req, res) => {
    try {
        const result = await allInitiativessService();
        if (result === 0) {
            return res.status(404).json({ message: "no Initiativess sent to users" });
        } else {
            return res.status(201).json({ message: "all Initiativess", result });
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}

//controller for getting one Initiatives
export const oneSpecificInitiative = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await onespecificInitiativesService(id);

        if (result && result.message) {
            return res.status(500).json({ message: result.message });
        } else {
            return res.status(201).json({ message: `Initiatives with id ${id}`, result });
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for updating a Initiatives
export const updateInitiative = async (req, res) => {
    try {
        const id = Number(req.params.id);

        //check if the report exists
        const checkInitiatives = await onespecificInitiativesService(id);
        if (checkInitiatives.length === 0) {
            return res.status(404).json({ message: "Initiatives does not exist" })
        } else {
            let InitiativestDetails = {
                Title: req.body.Title,
                Tag: req.body.Tag,
                Date: req.body.Date
            }

            //filter out undefined values
            InitiativestDetails = Object.fromEntries(Object.entries(InitiativestDetails).filter(([_, value]) => value !== undefined));

            const result = await upTagInitiativesService(id, InitiativestDetails);
            if (result && result.message) {
                return res.status(500).json({ message: result.message })
            } else {
                return res.status(201).json({ message: `report with id ${id} upTagd`, result });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}

//controller for deleting a Initiatives
export const deleteInitiative = async (req, res) => {
    try {
        const id = Number(req.params.id);

        //check if the report exists
        const checkInitiatives = await onespecificInitiativesService(id);
        if (checkInitiatives.length === 0) {
            return res.status(404).json({ message: "Initiatives does not exist" })
        } else {
            const result = await deleteInitiativesService(id);

            if (result === 0) {
                return res.status(404).json({ message: "Initiatives does not exist" });
            } else {
                return res.status(201).json({ message: `Initiatives with id ${id} deleted` });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}