import {Router} from 'express';
import {findProgramsAndCourses} from '../handlers';

const router = Router();

router.get('/findProgramsAndCourses', findProgramsAndCourses);

export default router;
