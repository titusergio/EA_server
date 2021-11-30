import {Router} from 'express';

import { getUsers, getUser, createUser, deleteUser ,updateUser} from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id',updateUser);


export default router;
