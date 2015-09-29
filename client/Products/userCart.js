Template.userCart.helpers({
	products : function(){
		var items = Cart.find({buyerId : Meteor.userId() , checkout : false}).fetch();
		return _.map(items, function(item){
			var prod=Products.findOne(item.productId);
			var subtotal = item.quantity * prod.price;
			var newItem = _.extend(item, {
				'subtotal':subtotal,
				'name':prod.name,
				'owner':prod.ownerName});
			console.log("new Item: ", newItem);
			return newItem;
		});
	}
})