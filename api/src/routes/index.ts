import {Router} from 'express';
import coursesRouter from './courses';
import globalRouter from './global';
import programsRouter from './programs';
import docsRouter from './docs';

const router = Router();

// /courses/findAll
// /courses/find
// /courses/add
// /courses/addResource
// /courses/remove
// /courses/removeResource
router.use('/courses', coursesRouter);

// /docs
router.use('/docs', docsRouter);

// /global/find
router.use('/global', globalRouter);

// /programs/findAll
// /programs/find
// /programs/add
// /programs/remove
router.use('/programs', programsRouter);

router.get('/', (req, res) => res.status(200).json({message: 'Healthy'}));

// Misc routes unmounted on another path
router.get('/time', (req, res) =>
  res
    .status(200)
    .json({status: 200, message: 'Success', data: {unixTime: Date.now()}})
);

export default router;
