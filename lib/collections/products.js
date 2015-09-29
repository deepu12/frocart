Products = new Mongo.Collection("productss");

Meteor.methods({
	'add': function(product){
		var user = Meteor.user();

		_.extend(product, {
			'ownerId': Meteor.userId(),
			'createdAt': new Date(),
			'ownerName':user.username
		});
		var prodId = Products.insert(product, function(error, data){
			console.log("insert callback data: ", data);
			return "deepu";
		});

		return prodId;
	},
	deleteProduct: function (productId) {
 	console.log("Product Deleted....",productId); 
  	var products = Products.findOne(productId);
    if ( products.ownerId !== Meteor.userId()) {
      // only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    Products.remove(productId);
  }
});
