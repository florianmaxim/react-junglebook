import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
	render(){
  		return <div>Hello little Component</div>;		
	}
}

render(<App/>, document.body);
