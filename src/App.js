import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import "./App.css";
import PokemonList from "./components/PokemonList";
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from "./actions"; 

function App() {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'))
  const dispatch = useDispatch()

  useEffect(() => {
    // Funcion asincrona
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      // Este promise.all significa que va a lanzar un conjunto de peticiones al mismo tiempo de
      // y se va a resolver cuando todas ellas hayan estado resueltas. 
      // Por cada uno de los pokemones que me haya traido la respuesta (pokemonsRes) vamos a obtener
      // sus detalles.
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
            {loading ? (
                <Col offset={12}>
                    <Spin spinning size="large" />
                </Col>
            ) : (
                <PokemonList pokemons={pokemons} />
            )}
        </div>
    );
}


export default App;
