import {Router} from 'express';
import {addProgram, findProgram, displayPrograms} from '../handlers';

const router = Router();

router.get('/findAll', displayPrograms);

router.get('/find', findProgram);

router.post('/addProgram', addProgram);

export default router;
