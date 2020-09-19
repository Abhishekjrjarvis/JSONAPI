var request = require("request");					// with request package 

request("https://jsonplaceholder.typicode.com/users", function(error,response, body){
	// eval(require("locus"));
	if(error){
		console.log("Something gone went wrong.......");
		console.log(error);
	}
	else if(response.statusCode === 200){
		var parsedData = JSON.parse(body);
		console.log(parsedData);
        console.log(parsedData.name + " lives in " + parsedData.address.city +  " contact with " + 				parsedData.phone + " works in " + parsedData.company.name);
	}
});




const rp = require("request-promise");				// with request-promise package
rp("https://jsonplaceholder.typicode.com/users/1",(error,response,body) =>{
	// eval(require("locus"));
	if(error){
		console.log("Something gone went wrong.......");
		console.log(error);
	}
	else if(response.statusCode === 200){
		const parsedData = JSON.parse(body);
		console.log(parsedData.name + " lives in " + parsedData.address.city +  " contact with " + 				parsedData.phone + " works in " + parsedData.company.name);
	}
});