import {Router} from 'express';

import { getQuestions, getQuestion, createQuestion, deleteQuestion, updateQuestion } from '../controllers/questions';

const router = Router();

router.get('/', getQuestions);
router.post('/', createQuestion);
router.get('/:id', getQuestion);
router.delete('/:id', deleteQuestion);
router.put('/:id',updateQuestion);


export default router;