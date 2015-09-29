FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/addProduct',{
	action: function(){
		BlazeLayout.render("appLayout", {content:"pro"});
	}
});

FlowRouter.route('/category/:catName',{
	action: function(params){
		BlazeLayout.render("appLayout",{content:"productList", params:params});
	}
});
FlowRouter.route('/buyProduct',{
	action: function(){
		BlazeLayout.render("appLayout",{content:"buy"});
	}
});
FlowRouter.route('/product/:productId',{
	action: function(params){
		BlazeLayout.render("appLayout",{content:"productPage", params:params});
	}
});
FlowRouter.route('/editProduct/:productId',{
	action: function(params){
		BlazeLayout.render("appLayout",{content:"pro", params:params});
	}
});
FlowRouter.route('/user/:userId',{
	action: function(params){
		BlazeLayout.render("appLayout",{content:"user", params:params});
	}
});
FlowRouter.route('/product/:prodId',{
	action : function(params){
		BlazeLayout.render("appLayout",{content:"added", params:params});
	}
});
FlowRouter.route('/userCart',{
	action : function(){
		BlazeLayout.render("appLayout",{content:"userCart"});
	}
})
