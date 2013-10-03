define([
	'backbone',
	'collections/boardCollection', 
	'text!template/boardView.html'],
	function(Backbone, BoardCollection, BoardViewTemplate) {
		var template = _.template(BoardViewTemplate);
		
		return Backbone.View.extend({
			el : '#boardList',
			collection : new BoardCollection,
			initialize : function(args){
				if (args) {
					this.collection.url = '/boards/'+args.id
				}
				this.render();
			},
			render : function(){
				var that = this;
				this.collection.fetch({
					success : function(models, res, option) {
						console.log(models);
						that.$el.html(template({boards : models.toJSON()}));
					}
				});							
				return this;
			}
		});
});