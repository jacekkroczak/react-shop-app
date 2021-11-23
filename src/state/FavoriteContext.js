import React, { useState } from 'react';

const FavoriteContext = React.createContext();

const FavoriteProvider = (props) => {
	const [favorite, setFavorite] = useState([]);
	return (
		<FavoriteContext.Provider value={[favorite, setFavorite]}>
			{props.children}
		</FavoriteContext.Provider>
	);
};

export { FavoriteContext, FavoriteProvider };
