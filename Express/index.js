/*********************************************************************************
 * 
 * Express server to serve Wordle.
 *
 * This server handles both Part 1 and Part2:
 * 
 * - For Part 1, simply put any static files (html, css, etc.) in the directory
 *   named "public".
 * 
 * - For Part 2, put the .ejs file in the directory named "views". Use the name
 *   of the file _without_ the .ejs extension as the route. For example, entering
 *   "wordle_part2" in the navigation bar will tell the server to render 
 *   "views/wordle_part2.ejs"
 * 
 *   Put any parameters for the template in paramsForPt2.
 * 
 ******************************************************************************/

// I used Express for this assignment.

/* Import the module containing ExpressJS */
const express = require('express')

/* Import other helpful modules */
const path = require('path')
const fs = require('fs')

/* Instantiate a server object*/
const app = express()
const port = 3000

/* Tell the server to use EJS by default */
app.set('view engine', 'ejs')

/* Set the views directory as the default location for 
   ejs template files */
app.set('views', path.join(__dirname, 'views'));

/* Serve any documents located in the public directory "as is"*/
app.use(express.static(path.join(__dirname, 'public')));

/* If the route/path begins with "wordle" (and is not the name of a file in public)
  then look for an .ejs file of the same name in the view directory. 
  ([^/]+ is a regular expression that matches one or more characters _except_ a slash.) */

// Getter that parses data from query string
app.get('/wordle_part2', (req, res) => {
    // Extract query parameters
    const maxAttempts = parseInt(req.query.maxAttempts) || 5; 
    const guesses = req.query.guesses ? req.query.guesses.split(',') : []; // Convert comma-separated string to array

    // Render the template with extracted parameters
    res.render('wordle_part2', { maxAttempts, guesses });
});


/* By default, serve public/wordle_part1.html. (Feel free to change this!) */
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wordle_part1.html'));
});
 
/* Launch the server */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))