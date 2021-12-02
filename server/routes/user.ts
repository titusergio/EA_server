import {Router} from 'express';

import { getUsers, getUser, signUp, signIn} from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/:id', getUser);



export default router;
