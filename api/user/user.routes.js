import { Router } from 'express';
import { add, del, update } from './user.controller';

const router =  new Router();
router.route('/user/add').post(add);
router.route('/user/delete').post(del);
router.route('/user/update').post(update);

export default router;