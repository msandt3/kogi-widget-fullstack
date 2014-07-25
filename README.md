# Kogi Widget Fullstack

This is the fullstack implementation of a simple login widget. The back end is a Node.js server built with express that serves static assets as well as providing proxy API calls. The front end was built with Yeoman and simply renders the content of the widget. 

## What You Need

This project depends on several pieces of software available for free. 

* [Node.js](http://nodejs.org/)
* [NPM](https://github.com/npm/npm)
* [Grunt](http://gruntjs.com/getting-started)
* [Bower](http://bower.io/)

### Getting Started

After installing the dependencies above, we can now prepare our back and front end. 

##### Front End Prep

	$ cd /path/to/repo/widget-client
	$ bower install
	$ npm install

##### Back End Prep

	$ cd /path/to/repo/widget-server
	$ npm install

Thats it! You're ready to start coding!

### Running the code

First start the back end

	$ cd /path/to/repo/widget-server
	$ node server.js

Then serve the client

	$ cd /path/to/repo/widget-client
	$ grunt serve
