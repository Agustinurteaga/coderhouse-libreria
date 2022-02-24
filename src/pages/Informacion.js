import React from 'react';

import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};


const Informacion = props => {
	return (
	<ShopContext.Consumer>
		{context => (
		<React.Fragment>
			<MainNavigation
			/>
			<main className="Informacion">
			<div style={styles.container}>
			Informacion
			<p>
				Informacion de Informacion
			</p>
		</div>
			</main>
		</React.Fragment>
		)}
	</ShopContext.Consumer>
	);
};


export default Informacion;