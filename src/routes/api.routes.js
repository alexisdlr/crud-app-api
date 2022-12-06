import { Router } from "express";
import { apiDelete, apiGet, apiPost, apiUpdate } from "../controllers/api.controller.js";

const router = Router()

router.get('/', apiGet)
router.post('/', apiPost)
router.post('/delete', apiDelete)
router.post('/update', apiUpdate)


export default router