import PropTypes from 'prop-types';
import Player from '../Player/Player';

const AvailablePlayers = ({
  available,
  selected,
  allPlayers,
  handleChoosePlayer,
}) => {
  console.log('all Players', allPlayers);

  return (
    <div className=" mt-7 grid lg:grid-cols-3 gap-2 ">
      {allPlayers.map((player, index) => (
        <Player
          key={index}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
        ></Player>
      ))}
    </div>
  );
};

AvailablePlayers.propTypes = {};

export default AvailablePlayers;
