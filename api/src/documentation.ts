/**
 * @openapi
 * tags:
 *   - name: "courses"
 *   - name: "programs"
 *   - name: "global"
 *   - name: "documentation"
 *
 */

// NOTE: 'courses' routes
// /courses/findAll
// /courses/find
// /courses/add
// /courses/addResource
/**
 * @openapi
 * /courses/findAll:
 *   get:
 *     tags:
 *       - "courses"
 *     summary: "Returns ALL course names"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     courses:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           code:
 *                             type: string
 *                           description:
 *                             type: string
 *                           year:
 *                             type: integer
 *                           semester:
 *                             type: integer
 *                           credits:
 *                             type: integer
 *                           programName:
 *                             type: string
 * /courses/find:
 *   get:
 *     tags:
 *       - "courses"
 *     summary: "Finds a course using course code"
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Course code to search by
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                     name:
 *                       type: string
 *                     credits:
 *                       type: integer
 *                     programName:
 *                       type: string
 *                     year:
 *                       type: integer
 *                     semester:
 *                       type: integer
 *                     description:
 *                       type: string
 *                     courseResources:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           data:
 *                             type: string
 * /courses/add:
 *   post:
 *     tags:
 *       - "courses"
 *     summary: "Creates a course in the database"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *               semester:
 *                 type: integer
 *               year:
 *                 type: integer
 *               credits:
 *                 type: integer
 *               description:
 *                 type: string
 *                 required: false
 *           example:
 *             code: "CPNT217"
 *             name: "Introduction to Network Systems"
 *             semester: 1
 *             year: 1
 *             credits: 3
 *             description: "Hello world!"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 * /courses/addResource:
 *   post:
 *     tags:
 *       - "courses"
 *     summary: "Adds a course resource to a course via course code"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               resource:
 *                 type: string
 *           example:
 *             code: "CPNT217"
 *             resource: "https://youtube.com/totallyrealyoutubelink"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 * /courses/remove:
 *   delete:
 *     tags:
 *       - "courses"
 *     summary: "Deletes a course via course code"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *           example:
 *             code: "CPNT217"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 * /courses/removeResources:
 *   delete:
 *     tags:
 *       - "courses"
 *     summary: "Deletes ALL course resources via course code"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *           example:
 *             code: "CPNT217"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 *
 */

// NOTE: '/docs' routes
/**
 * @openapi
 * /docs/:
 *   get:
 *     description: Display API documentation
 *     summary:
 *     tags:
 *      - "documentation"
 */

// NOTE: 'global' route
// /global/find
/**
 * @openapi
 * /global/find:
 *   get:
 *     tags:
 *       - "global"
 *     summary: "Finds both programs and courses via user query"
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Substring to search for
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     courses:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           code:
 *                             type: string
 *                           name:
 *                             type: string
 *                           semester:
 *                             type: integer
 *                           year:
 *                             type: integer
 *                           credits:
 *                             type: integer
 *                           description:
 *                             type: string
 *                           programName:
 *                             type: string
 *                     programs:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           semester:
 *                             type: integer
 *                           year:
 *                             type: integer
 *                           type:
 *                             type: string
 *                           school:
 *                             type: string
 *
 */

// NOTE: 'programs' route
// /programs/findAll
// /programs/find
// /programs/add
// /programs/remove
/**
 * @openapi
 * /programs/findAll:
 *   get:
 *     tags:
 *       - "programs"
 *     summary: "Returns ALL program names"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     allPrograms:
 *                       type: array
 *                       items:
 *                         type: string
 * /programs/find:
 *   get:
 *     tags:
 *       - "programs"
 *     summary: "Finds a program using string name"
 *     parameters:
 *       - in: query
 *         name: program
 *         schema:
 *           type: string
 *         required: true
 *         description: Program name to search by
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     school:
 *                       type: string
 *                     type:
 *                       type: string
 *                     years:
 *                       type: integer
 *                     semesters:
 *                       type: integer
 *                     courses:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           code:
 *                             type: string
 *                           name:
 *                             type: string
 *                           semester:
 *                             type: integer
 *                           year:
 *                             type: integer
 *                           description:
 *                             type: string
 *
 * /programs/add:
 *   post:
 *     tags:
 *       - "programs"
 *     summary: "Creates a program in the database"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               semesters:
 *                 type: integer
 *               years:
 *                 type: integer
 *               type:
 *                 type: string
 *               school:
 *                 type: string
 *           example:
 *             code: "CPNT217"
 *             name: "Introduction to Network Systems"
 *             semester: 1
 *             year: 1
 *             credits: 3
 *             description: "Hello world!"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 *
 * /programs/remove:
 *   delete:
 *     tags:
 *       - "programs"
 *     summary: "Removes a program in the database"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties: {}
 */
