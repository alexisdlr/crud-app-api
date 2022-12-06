import { Router } from "express";
import { apiGet, apiPost } from "../controllers/api.controller.js";

const router = Router()

router.get('/', apiGet)
router.post('/', apiPost)


export default router