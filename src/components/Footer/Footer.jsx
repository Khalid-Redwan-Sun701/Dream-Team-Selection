import PropTypes from 'prop-types';
import logoFooter from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <img src={logoFooter} alt="" />
      </div>
      <footer className="footer bg-[#06091A]  text-base-content py-10 pl-12 lg:pl-40">
        <nav>
          <h6 className="footer-title text-white mb-8">About Us</h6>
          <p className="text-white ">
            We are a spirited crew, <br /> devoted to crafting unforgettable{' '}
            <br />
            experiences for our fans.
          </p>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-white">Home</a>
          <a className="link link-hover text-white">Service</a>
          <a className="link link-hover text-white">About</a>
          <a className="link link-hover text-white">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title text-white">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Subscribe to our newsletter for <br /> the latest updates
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="w-3/4 mx-auto">
        <hr />
        <p className="mt-10 mb-5 text-center text-white">
          &copy; 2024 Dream Team. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
