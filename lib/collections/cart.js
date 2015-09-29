Cart = new Mongo.Collection("cart");

Meteor.methods({
	'addCart' : function(productId){
		var product = Products.findOne(productId);
		if(!product)
			throw new Meteor.error("Product not found");

		var prdItem = {
			'productId' : productId,
			'buyerId' : Meteor.userId(),
			'quantity' : 1,
			'checkout' : false,
			'price' : product.price,
			'createdAt' : new Date()
		};
		var cartId = Cart.insert(prdItem);
		return cartId;

	}
})