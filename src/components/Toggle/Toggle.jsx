import PropTypes from 'prop-types';

const Toggle = ({
  handleClickedOnAvailable,
  handleClickedOnSelected,
  available,
  selected,
  selectedNumber,
}) => {
  return (
    <div className="flex items-center justify-between sticky top-0 z-50 md:backdrop-blur-md bg-white/50 py-4 px-8 shadow-md">
      <h1 className="font-bold text-[16px] md:text-[28px]">
        Available Players
      </h1>
      <div className="flex gap-3">
        <button
          onClick={handleClickedOnAvailable}
          className={` ${
            available ? 'bg-yellow-400' : 'bg-gray-300'
          } p-4 rounded-2xl font-bold`} // Add your base color here
        >
          Available
        </button>
        <button
          onClick={handleClickedOnSelected}
          className={` ${
            selected ? 'bg-yellow-400' : 'bg-gray-300'
          } p-4 rounded-2xl font-bold`} // Add your base color here
        >
          Selected ({selectedNumber})
        </button>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  handleClickedOnAvailable: PropTypes.func.isRequired,
  handleClickedOnSelected: PropTypes.func.isRequired,
  available: PropTypes.bool.isRequired, // Prop to indicate availability
  selected: PropTypes.bool.isRequired, // Prop to indicate selection
};

export default Toggle;
