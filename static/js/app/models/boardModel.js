define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		defaults : {
			pk : 0,
			model : '',
			fields : {
				title : '',
				content : '',
				writer : '',
				created_date : ''
			}
			
		},
		url : '/boards'
	});
});