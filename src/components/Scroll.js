import React from 'react';

// Use the React idea of children to wrap a element CardList
const Scroll = (props) => {
	return (
		// Use double curly brackets to invoke CSS properties; javascript(jsx) expression
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;