import { Router } from "express";

import { getFlats, getFlat, createFlat, updateFlat, deleteFlat } from "../controllers/flats";

const router = Router();

router.get('/', getFlats);
router.get('/:id', getFlat);
router.post('/', createFlat);
router.put('/:id',updateFlat)
router.delete('/:id',deleteFlat);

export default router;