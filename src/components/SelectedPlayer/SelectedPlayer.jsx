import PropTypes from 'prop-types';

const SelectedPlayer = ({ player, handleSelectedRemoveBtn }) => {
  const { name, role, image, price } = player;
  return (
    <div className="drop-shadow-lg">
      {/* name , image , role, remove */}
      <div
        className="
      my-5 flex justify-between items-center border rounded-sm p-5 "
      >
        {/* name , image , role */}
        <div className="flex items-center gap-3">
          <div>
            <img className="w-16 h-16 rounded-full object-cover" src={image} />
          </div>
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm">{role}</p>
            <p className="text-sm">Price: ${price}</p>
          </div>
        </div>
        {/* remove */}
        <div className="md:mr-20">
          <button
            onClick={() => handleSelectedRemoveBtn(player)}
            className="btn  "
          >
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/?size=48&id=102550&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

SelectedPlayer.propTypes = {};

export default SelectedPlayer;
