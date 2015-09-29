Template.navbar.helpers({
	count : function(){
		return Cart.find({ buyerId : Meteor.userId(), checkout : false}).count();
		
	}
})