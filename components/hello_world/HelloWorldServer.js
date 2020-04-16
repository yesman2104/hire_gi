var PageComponent = require("ds.base/PageComponent");

var TestComponentServer = PageComponent.create({
	"/": function(attributes, vars) {
		return new StatusResponse('good', {
			message: "Welcome to my Test Component"
		});
	},
	
	type: "TestComponentServer"
});

module.exports = TestComponentServer;
