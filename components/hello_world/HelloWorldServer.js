var PageComponent = require("ds.base/PageComponent");

var HelloWorldServer = PageComponent.create({
	"/": function(attributes, vars) {
		return new StatusResponse('good', {
			message: "Hello my world"
		});
	},
	
	type: "HelloWorldServer"
});

module.exports = HelloWorldServer;
