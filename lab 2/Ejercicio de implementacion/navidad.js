function Navidad(){
	var actual=new Date();
	var faltan=new Date(actual.getFullYear(), 11, 25);

	if (actual.getMonth()==11 && actual.getDate()>25){
		faltan.setFullYear(faltan.getFullYear()+1);
	}
	var dias = Math.ceil((faltan.getTime()-actual.getTime())/(1000*60*60*24));

	console.log("Faltan "+dias+" dias");
Navidad();