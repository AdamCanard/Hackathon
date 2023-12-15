import {Router} from 'express';
import {
  addCourse,
  addCourseResource,
  findCourse,
  displayCourses,
} from '../handlers';

const router = Router();

router.get('/findAll', displayCourses);

router.get('/find', findCourse);

router.post('/addCourse', addCourse);
// router.post('/addResource', addCourseResource);

export default router;
