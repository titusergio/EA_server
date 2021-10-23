import { Router } from "express";

import { getTutorings, getTutoring, createTutoring, updateTutoring } from "../controllers/tutoring";

const router = Router();

router.get('/', getTutorings);
router.get('/:id', getTutoring);
router.post('/', createTutoring);
router.put('/:id',updateTutoring)

export default router;