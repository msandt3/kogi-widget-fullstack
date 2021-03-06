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
```bash
$ cd /path/to/repo/widget-client
$ bower install
$ npm install
```

##### Back End Prep
```bash
$ cd /path/to/repo/widget-server
$ npm install
```
Thats it! You're ready to start coding!

### Running the code

First start the back end
```bash
$ cd /path/to/repo/widget-server
$ grunt serve
```

Then serve the client
```bash
$ cd /path/to/repo/widget-client
$ grunt serve
```

### Making Changes

The front end portion of this project doesn't need to be modified unless you want to play with how the widget will behave in various environments. To edit the widget itself please modify /widget-server/src/static/testwidget.js . 

### Deploying server to Heroku

Simply ensure all of your server changes are committed. You'll need to create your own heroku app and associate the Gruntfile repo url's with it. As well, make sure you have public key access to that heroku app.

Afterwards, simply run 
```bash
$ cd /path/to/repo/widget-server
$ grunt deploy
```

### Deploying front end Changes

You shouldn't need to deploy front end changes as modifying the widget should suffice. If you do want to play around with different environments on the front end you can push the changes to the github pages like so 

```bash
$ cd /path/to/repo/widget-client
$ grunt build
$ grunt buildcontrol:pages
```


##### Templates

In order to minimize the amount of HTML to be written in jQuery/Javascript i've circumvented CORS on the server side to allow for rendering of HTML templates. One can simply pull in raw HTML, or [Underscore](http://underscorejs.org/) style templates to handle display of complex JSON structures. 

The raw HTML is styled with [Pure CSS](http://purecss.io/), a lightweight CSS framework. You can leverage any of the components you choose in your HTML and Templates

###### TODO

* Create proxy API methods on server side for complete functionality
* Scaffold out remaining views
* Adjust styling to spec
* (Maybe) Implement [Backbone.js](http://backbonejs.org/) for model relations
* UNIT TESTING
* Shell script to start everything automatically