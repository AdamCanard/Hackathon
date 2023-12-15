import express, {Router} from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).json({message: 'Healthy'}));

// Misc routes unmounted on another path
router.get('/time', (req, res) =>
  res
    .status(200)
    .json({status: 200, message: 'Success', data: {unixTime: Date.now()}})
);

export default router;
