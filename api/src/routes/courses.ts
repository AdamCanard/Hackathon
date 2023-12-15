import {Router} from 'express';
import {coursesController} from '../controllers';

const router = Router();

router.get('/findAll', coursesController.findAll);

router.get('/find', coursesController.find);

router.post('/add', coursesController.add);

router.post('/addResource', coursesController.addResource);

router.delete('/remove', coursesController.remove);

router.delete('/removeResources', coursesController.removeResources);

export default router;
