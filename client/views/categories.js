Template.catList.helpers({
	catlist : function(){
		return _.uniq(Products.find({}, {category: 1}).fetch().map(function(x){ return x.category}));
	}
});