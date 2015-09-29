Template.home.helpers({
	// categories: function(){
	// 	 var Prods = Products.find({}, {category: 1}).fetch();
	// 	 console.log("Prods: ", Prods);
	// 	 Cats = Prods.map(function(x){return x.category});
	// 	 console.log("Cats: ", Cats);
	// 	 return Cats;
	// }

	product: function(){
		return Products.findOne("3P677Jfodvgxhh4mq");
	}
});
