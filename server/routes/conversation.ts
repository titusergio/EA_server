import {Router} from 'express';

import { getConversation, createConversation} from '../controllers/conversation';

const router = Router();

router.post('/', createConversation);
router.get('/:id', getConversation);


export default router;