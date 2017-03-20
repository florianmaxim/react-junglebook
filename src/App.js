import React, {Component} from 'react';
import {render} from 'react-dom';

import Little from './com/Little.js';

class App extends Component {
	render(){
		return <div><Little/></div>
	}
}

render(<App/>, document.getElementById('root'));
