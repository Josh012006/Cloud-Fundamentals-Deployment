import { Router } from "express";
import { addTask, fetchTasks, markAsCompleted } from "../controllers/taskController.js";

const router = Router();

router.get("/getAllTasks", fetchTasks);
router.get("/markAsCompleted/:id", markAsCompleted);
router.post("/addTask", addTask);


export default router;