import {Router} from 'express';

import { getAnswers, getAnswer, createAnswer, deleteAnswer, updateAnswer } from '../controllers/answers';

const router = Router();

router.get('/', getAnswers);
router.post('/', createAnswer);
router.get('/:id', getAnswer);
router.delete('/:id', deleteAnswer);
router.put('/:id',updateAnswer);


export default router;