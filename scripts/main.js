'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');

Parse.initialize('buuk76K4aHB31S5M078qsDv2l9pCPcDQ6mcOzL9m', 'HkBxtpMh1cJf7tdfBOoQYdzvdZJqns8afMltdeGC');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent />, app);
	},
	books: function() {
		React.render(<BooksComponent />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);
