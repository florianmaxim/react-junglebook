import React from 'react';
import ReactDOM from 'react-dom';

import Banana from './components/Banana';

class App extends React.Component {
	render(){
		return <div>You are standing in the jungle with a <Banana/> in your hand. </div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
