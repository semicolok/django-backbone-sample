define([
	'backbone',
	'views/pageView',
	'views/boardView'
], function(Backbone, PageView, BoardView) {
	return Backbone.Router.extend({
		routes: {
			'listpage' : 'listpage'
		},
		initialize : function(options){
			this.mainView = options.mainView;
			new PageView();
		},
		listpage : function(){
			new BoardView();
		}
	});
});