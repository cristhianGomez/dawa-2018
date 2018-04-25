var _ = require("underscore");
var employeesCollection = [{
	"id":1, "name":"dony", "desgnation":"SE","salary":25000
},{
	"id":2, "name":"Rohit", "desgnation":"SSE","salary":35000
},{
	"id":3, "name":"Akanksha", "desgnation":"Manager","salary":45000
},{
	"id":4, "name":"Mohan", "desgnation":"Accountant","salary":30000
},{
	"id":4, "name":"Gita", "desgnation":"SSE","salary":35000
}];
var cargos =_.map(employeesCollection,function(employee){
	return {nombre:employee.name, cargo:employee.desgnation};
});
console.log(_.pluck(employeesCollection,"name"));