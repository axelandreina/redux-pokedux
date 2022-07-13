import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import "./App.css";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import {fetchPokemonsWithDetails} from './slices/dataSlice'

function App() {
    const pokemons = useSelector((state) =>
        state.data.pokemons , shallowEqual);

    // El useSelector para saber si renderizar un componente o no, utiliza una comparacion estricta. === 


    const loading = useSelector((state) => state.ui.loading )
    const dispatch = useDispatch();

    useEffect(() => {
        // Funcion asincrona
        dispatch(fetchPokemonsWithDetails())
    }, []);

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
