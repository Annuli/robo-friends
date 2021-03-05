import React from 'react';

// Card Component
const Card = ({ name, email, id }) => {

	// Cache the URL to a variable to be used in the src
	const url = `https://robohash.org/${id}?200x200`;

	// This is a JSX code!; can ONLY return 1 element
	return ( // text-center, background color, display: inline block, border, padding, margins, animation, border width, shadow
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>  
			<img alt='Robots' src={url} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

// 
export default Card;