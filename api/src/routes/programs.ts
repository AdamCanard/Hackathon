import {Router} from 'express';
import {addProgram, findProgram} from '../handlers';

const router = Router();

router.get('/find', findProgram);
router.post('/addProgram', addProgram);

export default router;
