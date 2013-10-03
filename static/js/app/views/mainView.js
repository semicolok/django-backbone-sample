define([
	'backbone',
	'text!template/mainView.html'],
	function(Backbone, mainViewTemplate) {	
		return Backbone.View.extend({
			el : 'body',
			initialize : function(){
				this.render();
			},
			events : {
				"click #postBt"			: "postMessage"
			},
			render : function(){
				this.$el.html(_.template(mainViewTemplate));				
				return this;
			}
		});
});