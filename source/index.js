import React, {Component} from 'react';
import {render} from 'react-dom';

import Melon from './components/Melon.js';

class App extends Component {
	render(){
		return <div>You are standing in the jungle with a <Melon/> in your hand.</div>
	}
}

render(<App/>, document.getElementById('root'));
