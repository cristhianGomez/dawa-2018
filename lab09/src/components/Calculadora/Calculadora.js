import React, {Component} from 'react';

import Boton from '../Boton/Boton';

export default class Calculadora extends Component{

	render(){
		return (
			<table>
			<tr>
			<td>
			<Boton numero = "1" />
			</td>
			<td>
			<Boton numero = "2" />
			</td>
			<td>
			<Boton numero = "3" />
			</td>
			<td>
			<Boton numero = "+" />
			</td>
			</tr>
			<tr>
			<td>
			<Boton numero = "4" />
			</td>
			<td>
			<Boton numero = "5" />
			</td>
			<td>
			<Boton numero = "6" />
			</td>
			<td>
			<Boton numero = "*" />
			</td>
			</tr>
			</table>

			)
	}

}