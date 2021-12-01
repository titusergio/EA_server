import {Router} from 'express';

import { getUsers, getUser, signUp} from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.post('/', signUp);
router.get('/:id', getUser);



export default router;
