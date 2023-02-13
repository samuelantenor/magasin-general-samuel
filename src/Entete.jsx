import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
function Entete(props) {
	let panier = props.panier;
	console.log("Le panier qui nous vient de Appli affiché dans Entete : ", panier);
	return(
		<header className="Entete">
			<h1>Magasin Général</h1>
			<nav>
				<span>Produits</span>
				<span>À propos</span>
				<span>
				<Badge badgeContent={5} color="secondary">
				<ShoppingCartIcon/>
					 
					 </Badge> 
					 </span>
			</nav>
		</header>
	)
}

export default Entete;