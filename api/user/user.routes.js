import { Router } from 'express';
import { add } from './user.controller';
import { del } from './user.controller';

const router =  new Router();
router.route('/user/add').post(add);
router.route('/user/delete').post(del);
export default router;