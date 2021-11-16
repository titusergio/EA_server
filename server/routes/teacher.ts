import {Router} from 'express';

import {createTeacher, getTeacher, getTeachers, deleteTeacher, updateTeacher} from '../controllers/teacher';

const router = Router();


router.get('/', getTeachers);
router.post('/', createTeacher);
router.get('/:id', getTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher);

export default router;