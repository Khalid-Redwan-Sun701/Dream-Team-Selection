import PropTypes from 'prop-types';
import bgimg from '../../assets/bg-shadow.png';
import bannerpic from '../../assets/banner-main.png';

const Banner = ({ claimCreditCoin }) => {
  return (
    <div
      className="flex flex-col justify-center bg-black  items-center bg-cover bg-center py-20 space-y-5 my-6 rounded-2xl"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <img src={bannerpic} alt="" />
      <h1 className="text-white text-center px-5 text-2xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-gray-300 text-sm mt-2">
        Unleash Your Potential. Redefine Your Game!
      </p>
      <button
        onClick={claimCreditCoin}
        className="mt-4 px-6 py-2 rounded-2xl bg-yellow-400 text-black rounded-full hover:bg-yellow-500 font-bold"
      >
        Claim Free Credit
      </button>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
