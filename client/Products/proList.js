Template.productList.helpers({
	products: function(){
		console.log("from here ");
		if(this.catName)
			return Products.find({category:this.catName});
		else
			return Products.find();
	},
	// userBtn : function(){
	// var user = Meteor.users.findOne(this.userId);
	// console.log("From product items helper "+this.userId);
	// 	if(this.userId === Meteor.userId())
	// 		return { btnName = "Edit"};
	// 	else
	// 		return { btnName = "Buy"};
	// }
});