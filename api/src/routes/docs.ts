import {Router} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
const router = Router();

const swaggerDefinition = {
  // Like the one described here: https://swagger.io/specification/#infoObject
  openapi: '3.0.3',
  info: {
    title: 'SAIT CourSearch API Documentation',
    version: 'v' + '0.0.0',
    description:
      'API documentation for use by fellow devs to use the backend API.\n' +
      '\nSchemas / examples are provided for usability.\n',
  },
};

// Defining (relative) filepaths to JSDOC files
const apis = [
  './src/documentation.ts', // Uncompiled projects (eg. hot reloading ts files)
  './build/src/documentation.js', // Build artifact only (eg. deploy-ready docker image)
];

router.get('/v1', (req, res) =>
  res.send(swaggerJsdoc({swaggerDefinition, apis}))
);

router.use((req, res) => {
  console.log(`Invoked (${req.originalUrl}): rendering docs page`);
  res.render('docs');
});

export default router;
