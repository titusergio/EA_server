import {Router} from 'express';

import { getSubjects, getSubject, createSubject, updateSubject , deleteSubject} from '../controllers/subject';

const router = Router();

router.get('/', getSubjects);
router.post('/', createSubject);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);
router.put('/:id',updateSubject);


export default router;