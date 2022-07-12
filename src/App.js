import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from "./components/Searcher";
import { Col } from "antd";
import "./App.css";
import PokemonList from "./components/PokemonList";
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonsWithDetails } from "./actions"; 

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch()

  useEffect(() => {
    // Funcion asincrona
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      // Este promise.all significa que va a lanzar un conjunto de peticiones al mismo tiempo de
      // y se va a resolver cuando todas ellas hayan estado resueltas. 
      // Por cada uno de los pokemones que me haya traido la respuesta (pokemonsRes) vamos a obtener
      // sus detalles.
      dispatch(getPokemonsWithDetails(pokemonsRes));

    };
    
    fetchPokemons();
  }, [])

    return (
        <div className="App">
          <Col span={4} offset={10}>
            <img src={logo} alt="Pokedux logo" />
          </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}


export default App;
