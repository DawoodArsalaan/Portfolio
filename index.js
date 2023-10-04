const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// Set the view engine to use EJS (Embedded JavaScript templates)
app.set('view engine', 'ejs');

// Set the folder for views
app.set('views', __dirname + '/views');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Route for the home page
app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/home', (req, res) => {
    res.render('home');
  });
  
  // Route for the about page
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  // Route for the projects page
  app.get('/projects', (req, res) => {
    res.render('projects');
  });

  // Route for the skills page
  app.get('/skills', (req, res) => {
    res.render('skills');
  });

  // Route for the services page
  app.get('/services', (req, res) => {
    res.render('services');
  });
  
  // Route for the contact page
  app.get('/contactme', (req, res) => {
    res.render('contactme');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
