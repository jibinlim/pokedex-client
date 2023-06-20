import PropTypes from "prop-types";
import {
  MyPokemonCard,
  MyPokemonImage,
  MyPokemonName,
} from "../../styles/myPage.style";

const Card = ({ pokeData }) => {
  return (
    <MyPokemonCard to={`/detail/${pokeData.id}`} key={pokeData.id}>
      <p style={{ color: "black" }}>No. {pokeData.id}</p>
      <MyPokemonImage src={pokeData.imagegif} alt="Pokemon" />
      <MyPokemonName>{pokeData.name}</MyPokemonName>
    </MyPokemonCard>
  );
};

Card.propTypes = {
  pokeData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagegif: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
