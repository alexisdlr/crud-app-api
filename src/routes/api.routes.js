import { Router } from "express";
import { apiDelete, apiGet, apiPost } from "../controllers/api.controller.js";

const router = Router()

router.get('/', apiGet)
router.post('/', apiPost)
router.delete('/', apiDelete)

export default router