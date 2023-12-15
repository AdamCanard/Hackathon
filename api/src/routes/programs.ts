import {Router} from 'express';
import {programsController} from '../controllers';

const router = Router();

router.get('/findAll', programsController.findAll);

router.get('/find', programsController.find);

router.post('/add', programsController.add);

router.delete('/remove', programsController.remove);

export default router;
