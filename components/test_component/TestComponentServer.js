var PageComponent = require("ds.base/PageComponent");

var TestComponentServer = PageComponent.create({
	data: function(attributes, vars, containerList) {
		var urlArray = [];

		//Search for all upload records
		var fr = new FRecord('upload');
		fr.search();
		while (fr.next()) {
			//Check to see if we need to match a suffix
			if (attributes.suffix != 'all') {
				//Check to see if the suffix matches
				if (fr.name.indexOf(attributes.suffix) >= 0) {
					//Add the url to the list
					urlArray.push(fr.url);
 				}
			} else {
				//Pushing all urls
				urlArray.push(fr.url);
			}		
		}
		
		return new StatusResponse('good', {
			urls: urlArray
		});
	},
	
	type: "TestComponentServer"
});

module.exports = TestComponentServer;
