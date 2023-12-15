import {Router} from 'express';
import {addCourse, addCourseResource, findCourse} from '../handlers';

const router = Router();

router.get('/find', findCourse);

router.post('/addCourse', addCourse);
router.post('/addResource', addCourseResource);

export default router;
