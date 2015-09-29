Template.added.helpers({
	addSuccess : function(){
		console.log("FROM addSuccess helper"+this._id);

		return Products.find(this._id);
	}
})

//find({}).sort({_id:-1}).limit(1);