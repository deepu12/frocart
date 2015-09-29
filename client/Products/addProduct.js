Template.pro.events({
	"submit .new-product": function(event){
		event.preventDefault();

		var product = {
			name: event.target.product.value,
			price: event.target.price.value,
			category: toTitleCase(event.target.category.value),
			description: event.target.description.value
			
		};

		Meteor.call('add', product, function(error, prodId){
			if(error)
				console.log("Error adding product: ", error);
			else{
				event.target.product.value="";
				console.log("Pro event executed 2 ", prodId);
				FlowRouter.go("/product/"+prodId); 
			}
		});
		console.log("Pro event executed 1");
	}

});

Template.pro.onCreated(function(){
	if(!Meteor.userId())
		FlowRouter.go("/");
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
};

Template.pro.helpers({
	product : function(){
		var product = Products.findOne({_id:this.productId});
		//product.isOwner = ( product.ownerId===Meteor.userId() );
		return product;	
	},
	temp : function(){
		if(this.productId)
			return {title :"Edit", submit : "Save" };
		else
			return {title :"Add", submit : "Add" };
	}
	
})

