define(['backbone',	
	'models/boardModel'],
	function(Backbone, BoardModel) {
		return Backbone.Collection.extend({
			model : BoardModel,
			url : '/boards',
			parse : function(response){
				return response;
			}
	});
});