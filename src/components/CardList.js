import React from 'react';
import Card from './Card';

// React needs a unique key to confirm what each property is??
const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((use, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							username={robots[i].username} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;