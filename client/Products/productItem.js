Template.productItem.helpers({
	action : function(){
		// console.log("Owner"+this.ownerId);
		// console.log("Current User"+Meteor.userId());
		if(this.ownerId===Meteor.userId())
			return "Edit";
		else

			return "Add to Cart";

	}
});

Template.productItem.events({
	"click #pro-action" : function(event, template){
		console.log("template data: ", template.data);
		if(template.data.ownerId===Meteor.userId())
			FlowRouter.go('/editProduct/'+template.data._id);
		else
		{
			Meteor.call("addCart", template.data._id,function(error, data){
				if(!error)
				{
					Materialize.toast('Added to Cart', 4000);
					$('#pro-action').addClass('disabled');
				}
			});
		}
	}
});