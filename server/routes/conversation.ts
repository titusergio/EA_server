import {Router} from 'express';

import { getConversation, createConversation, getConversationUsers} from '../controllers/conversation';

const router = Router();

router.post('/', createConversation);
router.get('/:id', getConversation);
router.get('/find/:firstUserId/:secondUserId', getConversationUsers);

export default router;