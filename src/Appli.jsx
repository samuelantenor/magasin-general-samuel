import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import {useState} from 'react';

function Appli() {
  // On utilise le HOOK useState()
  const [panier, setPanier] = useState({});
  

  return (
    <div className="Appli">
      <Entete panier={panier}/>
      <ListeProduits panier={panier} setPanier={setPanier} />
      <Pied2page/>
    </div>
  );
}

export default Appli;
