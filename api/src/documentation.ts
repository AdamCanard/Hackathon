/**
 * @openapi
 * tags:
 *   - name: "courses"
 *   - name: "programs"
 *
 */

// NOTE: 'courses' routes
/**
 * @openapi
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
 *               type: "object"
 *               properties:
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   type: "object"
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
 *                     courseResources:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           data: string
 *
 * /courses/addCourse:
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
 *               type: "object"
 *               properties:
 *                 status:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   type: "object"
 *                   properties: {}
 *
 */
