import React, {Component} from 'react';

import Classes from './Calculadora.css';

export default class Calculadora extends Component{
	constructor(props){
	super(props);
		this.state = {	var1: 0,
						var2:0,
						mostrar: "0",
		 				operador: false,
		 				resultado: ""
		 			}
		 			
		}
		//Solo acumula los datos para mostrarlos en la pantalla si resultado igual a 0 se reinicia
	acumular = (dato) => {
		const{resultado} = this.state 
		this.setState({
			resultado: 	this.state.resultado.concat(String(dato))		
		})
			if(this.state.mostrar === "0"){
						this.setState({
							mostrar: String(dato)
							}) 
			}else{
						this.setState({
							mostrar: resultado
							}) 
			}
		}
	 //va a llenar la data depende de la variable operador
	llenarDatos = () => {
		const{operador} = this.state ;
		(operador === false)?this.setState({var1: this.state.resultado
								}):
							 this.setState({var2: this.state.resultado
								});
		this.setState({
					 resultado: "", mostrar: "0"
						})		
	}	

	opera = () =>{
		}

	//
	operarDatos = (dato) => {

		const{ var1, var2} = this.state;
		this.llenarDatos();

		if(var2 !== "0")
			{
				switch(dato){
					case "+": this.setState({mostrar: var1 + var2}); break;
					case "-": this.setState({mostrar: var1 - var2}); break;
					case "/": this.setState({mostrar: var1 / var2}); break;
					case "*": this.setState({mostrar: var1 * var2}); break;
					default: break;
				}
			}
		else{ 
				this.setState({ operador: true,
				})
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
   		    	onClick={() => this.acumular(this.state.operador)} value= {1} />
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