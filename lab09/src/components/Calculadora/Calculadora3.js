import React, {Component} from 'react';

import Classes from './Calculadora.css';

export default class Calculadora extends Component{
	constructor(props){
	super(props);
		this.state = {var1: 0,
		 			  var2: 0,
		 			  op: "",
		 			  mostrar: " ",
		 			}
	}
	acumular = (dato) => {
			this.setState({
				mostrar: this.state.mostrar + dato
				}) 
	}
	 
	llenarDatos = () => {
			if(this.state.var1 === 0){
				this.setState({
					var1: parseFloat(this.state.mostrar)

					}) 


			}
			else{
			this.setState({
					var2: parseFloat(this.state.mostrar)
					}) 

			}
			this.setState({mostrar: ""}) 	

		
	}
	opera = () =>{
		const{op, var1, var2} = this.state
		let v1 =parseFloat(var1), v2 = parseFloat(var2), res = 0

		this.llenarDatos()
		switch(this.state.op){
			case "+":res = (v1 + v2) ; break;
			case "-": if(this.state.op === ""){this.setState({ op: "-"})
					  }else{ this.opera()}; break;
			case "/": if(this.state.op === ""){this.setState({ op: "/"})
					  }else{ this.opera()}; break;
			case "*": if(this.state.op === ""){this.setState({ op: "*"})
					  }else{ this.opera()}; break;
			default: break;
	
		}
		 this.setState({ mostrar: String(res)})
	}

		
	operarDatos = (dato) => {
		switch(dato){
			case "+": if(this.state.op === ""){this.setState({ op: "+"} )
						this.llenarDatos()
					  }else{ this.opera()}; break;
			case "-": if(this.state.op === ""){this.setState({ op: "-"})
					  }else{ this.opera()}; break;
			case "/": if(this.state.op === ""){this.setState({ op: "/"})
					  }else{ this.opera()}; break;
			case "*": if(this.state.op === ""){this.setState({ op: "*"})
					  }else{ this.opera()}; break;
			default: break;
	
		}
	}


	render(){

	return (
		<table className={Classes.boton}  >
		<tr> {JSON.stringify(this.state, null, 2)} <br/></tr>
		<tr ><td className={Classes.boton} colspan = "4">{this.state.mostrar}</td></tr>
		 	  	<tr  className={Classes.td} >
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("1")} value= {1} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("2")} value= {2} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("3")} value= {3} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.operarDatos("+")} value= {"+"} />
   	   			</td>
      			</tr>
       	
		 	  	<tr  className={Classes.td}>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("4")} value= {4} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("5")} value= {5} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("6")} value= {6} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.operarDatos("-")} value= {"-"} />
   	   			</td>
      			</tr>
       	
		 	  	<tr  className={Classes.td}>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("7")} value= {7} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("8")} value= {8} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("9")} value= {9} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.operarDatos("*")} value= {"*"} />
   	   			</td>
      			</tr>
       	
		 	  	<tr  className={Classes.td}>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular(".")} value= {"."} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("0")} value= {0} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.operarDatos("=")} value= {"="} />
   	   			</td>
      			<td> 
   		    	<input type= "button" className={Classes.boton} 
   		    	onClick={() => this.acumular("/")} value= {"/"} />
   	   			</td>
      			</tr>
       	

			</table>

			)
	}

}