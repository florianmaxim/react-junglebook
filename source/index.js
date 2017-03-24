import React from 'react';
import ReactDOM from 'react-dom';

import Apple from './components/Apple';

class App extends React.Component {
	render(){
		return <div>You are standing in the jungle with a <Apple/> in your hand. </div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
