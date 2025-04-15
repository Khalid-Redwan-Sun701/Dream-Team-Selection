import PropTypes from 'prop-types';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({
  selectedNumber,
  selectedPlayers,
  handleSelectedRemoveBtn,
  handleAddMorePlayer,
}) => {
  return (
    <div className="my-6">
      <div>
        <h2 className="font-bold">Selected Player ( {selectedNumber} / 6 )</h2>
      </div>

      <div>
        {selectedPlayers.map((player, index) => (
          <SelectedPlayer
            key={index}
            player={player}
            handleSelectedRemoveBtn={handleSelectedRemoveBtn}
          ></SelectedPlayer>
        ))}
      </div>

      <button onClick={handleAddMorePlayer} className=" btn my-4 bg-yellow-400">
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayers.propTypes = {};

export default SelectedPlayers;
