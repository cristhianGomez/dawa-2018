import React, {Component} rom 'react';

import Contador from '.components/Contador/Contador';

class App extends Component{

	render(){
		return (
			<h1>Este es mi componente de contador </h1>
			<p> Este contador iniciará en: {this.props.valor}</p>
			<Contador />
			);
	}
}
export default App;