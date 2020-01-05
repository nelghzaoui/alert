import { Router } from 'express';

import { createServer } from '../controllers/servers';

const router = Router();

router.post('/', createServer);
router.get('/');
router.patch('/:id');
router.delete('/:id');

export default router;
