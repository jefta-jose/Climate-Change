import { Router } from "express";
import { createInitiative, allInitiatives,  oneSpecificInitiative, updateInitiative, deleteInitiative } from "../Controllers/initiativesController.js";

const initiativeRouter = Router();
initiativeRouter.post('/createinitiative', createInitiative);
initiativeRouter.get('/initiatives', allInitiatives);
initiativeRouter.get('/oneinitiative/:id', oneSpecificInitiative); // by initiative id
initiativeRouter.put('/updateinitiative/:id', updateInitiative);
initiativeRouter.delete('/deleteinitiative/:id', deleteInitiative);

export default initiativeRouter;
