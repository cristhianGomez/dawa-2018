import React, {Component} from 'react';
import classes from './Boton.css';

export default class Contador extends Component{
	
	render(){
		return (
			
			<td className= {classes.boton}>         
			{this.props.numero} 
			</td>
    		)
	}

}