'use strict';

require.config({
	deps: ['app'],
	paths : {
		'jquery' : 'libs/jquery/jquery-1.10.2.min',
		'underscore' : 'libs/underscore/underscore-min',
		'text' : 'libs/require/text',
		'backbone' : 'libs/backbone/backbone-min'
	},
	shim : {
		'underscore' : {exports: '_'},
		'backbone' : {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});