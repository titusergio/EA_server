import { Router } from "express";

import { getMarkers, createMarker } from "../controllers/markers";

const router = Router();

router.get('/', getMarkers); 
router.post('/', createMarker); 

export default router;