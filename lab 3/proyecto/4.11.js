var _ = require("underscore");
var employeesCollection = [{
	"id":1, "name":"dony", "designation":"SE","salary":25000
},{
	"id":2, "name":"Rohit", "designation":"SSE","salary":35000
},{
	"id":3, "name":"Akanksha", "designation":"Manager","salary":45000
},{
	"id":4, "name":"Mohan", "designation":"Accountant","salary":30000
},{
	"id":4, "name":"Gita", "designation":"SSE","salary":35000
}];
var empleados_sse= _.chain(employeesCollection)
.filter(function(employee){
	return employee.designation === "SSE"
}).map(function(employee){
	return {name: employee.name, id:employee.id};
}).value();
console.log(empleados_sse);