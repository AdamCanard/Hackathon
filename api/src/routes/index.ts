import {Router} from 'express';
import coursesRouter from './courses';
import globalRouter from './global';
import programsRouter from './programs';
import docsRouter from './docs';

const router = Router();

router.use('/courses', coursesRouter);
router.use('/programs', programsRouter);
router.use('/global', globalRouter);
router.use('/docs', docsRouter);

router.get('/', (req, res) => res.status(200).json({message: 'Healthy'}));

// Misc routes unmounted on another path
router.get('/time', (req, res) =>
  res
    .status(200)
    .json({status: 200, message: 'Success', data: {unixTime: Date.now()}})
);

export default router;
