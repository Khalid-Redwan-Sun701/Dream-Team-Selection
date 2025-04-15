import PropTypes from 'prop-types';

const Player = ({ player, handleChoosePlayer }) => {
  //   console.log('player', player);
  const { name, country, role, battingStyle, bowlingStyle, price, image } =
    player;

  return (
    <div className="p-8 flex flex-col gap-y-4 ">
      {/* image */}
      <div>
        <img
          className="w-full h-[320px] object-cover rounded-xl "
          src={image}
          alt=""
        />
      </div>
      {/*Name*/}
      <div className="flex gap-2">
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/?size=80&id=97VpHK186j7G&format=png"
          alt=""
        />
        <h3 className="font-bold">{name}</h3>
      </div>
      {/* Country and Role */}
      <div className="flex justify-between items-center">
        {/* country */}
        <div className="flex flex-row gap-x-2">
          <img
            className="h-5 w-5"
            src="https://img.icons8.com/?size=50&id=2754&format=png"
            alt=""
          />
          <p>{country}</p>
        </div>
        {/* role */}
        <div>
          <h2 className="bg-gray-200 p-2 rounded-xl">{role}</h2>
        </div>
      </div>
      <p className="font-semibold">Rating</p>
      {/* Batting & Bowling Style */}
      <div className="flex justify-between">
        <h2>{battingStyle}</h2>
        <h2>{bowlingStyle}</h2>
      </div>

      {/* Price & Choose player */}
      <div className="flex justify-between items-center">
        <h2>Price : ${price}</h2>
        <button
          className="btn hover:bg-yellow-400"
          onClick={() => handleChoosePlayer(player)}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {};

export default Player;
