import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return <div>You are standing in the jungle with a banana in your hand 🍌</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
