import PropTypes from 'prop-types';
import bgimg from '../../assets/bg-shadow.png';

const Newsletter = () => {
  return (
    <div
      className=" bg-white flex flex-col justify-center  items-center bg-cover bg-center py-20 space-y-5 my-6 rounded-[24px] w-11/12 mx-auto "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <h1 className="text-black text-center px-5 text-2xl font-bold">
        Subscribe To Our Newsletter
      </h1>
      <p className="text-black text-sm mt-2">
        Get the latest updates and news in your inbox!
      </p>
      <div>
        <form>
          <fieldset className="form-control w-80">
            <label className="label"></label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered flex-grow"
              />
              <button className="ml-4 btn bg-gradient-to-r from-cyan-500 to-blue-500">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

Newsletter.propTypes = {};

export default Newsletter;
