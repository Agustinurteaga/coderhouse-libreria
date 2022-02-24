import React from 'react';
import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";

const styles = {
	container: {
		margin: '40px 0 40px 0',
	},
};


const Contacto = props => {
	return (
	<ShopContext.Consumer>
		{context => (
		<React.Fragment>
			<MainNavigation
			/>
			<main className="Contacto">
			<div style={styles.container}>
			Contact
			<p>
				Informacion de contacto
			</p>
		</div>
			</main>
		</React.Fragment>
		)}
	</ShopContext.Consumer>
	);
};


export default Contacto;