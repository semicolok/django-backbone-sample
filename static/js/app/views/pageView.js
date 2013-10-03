define([
	'backbone',
	'models/boardModel',
	'text!template/pageView.html'],
	function(Backbone, BoardModel, pageViewTemplate) {
		
		return Backbone.View.extend({
			el : '#section',
			initialize : function(){
				this.$el.html(_.template(pageViewTemplate));
				this.$el.find('#boardList').empty();
			}
		});
});