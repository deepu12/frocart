Template.productPage.helpers({
	product : function(){
		var product = Products.findOne({_id:this.productId});
		product.isOwner = ( product.ownerId===Meteor.userId() );
		return product;	
	},
	isOwner:function(){
		var product=Products.findOne({_id:this.productId});
		return product.ownerId===Meteor.userId();
	}
});

Template.productPage.events({
	"click #deleteProduct" : function(event, template){
		var prodId = (deleteProduct).getAttribute("pid");
		console.log("prod Id: ", prodId);
	  Meteor.call("deleteProduct", prodId, function(error){
	  	if(!error)
	  		FlowRouter.go('/');
	  	else
	  		throw new Meteor.error("Delete Failed");
	  });    
	}
	
});
