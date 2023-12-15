import {Router} from 'express';
import {globalController} from '../controllers';

const router = Router();

router.get('/find', globalController.find);

export default router;
