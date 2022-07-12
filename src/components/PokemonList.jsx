import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
    // console.log(pokemons)
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        name={pokemon.name}
                        key={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types = {pokemon.types}
                        id = {pokemon.id}
                        favorite = {pokemon.favorite}
                    />
                );
            })}
        </div>
    );
};

// En caso de que no tengamos nada que mostrar, va a salir esto"

PokemonList.defaultProps = {
    pokemons: Array(10).fill(""), //['', '', '', ...]
};

export default PokemonList;
