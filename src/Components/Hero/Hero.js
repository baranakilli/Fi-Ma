
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="flex justify-between items-center">
      <a id='logo-container' href="https://www.trendyol.com/magaza/fi-ma-m-645403?sst=0">
        <img
          id="fi-ma-logo"
          className="w-100 bg-white br4"
          src={require('./fi-ma.jpg')}
          alt="fi-ma-logo"
          draggable="false"
        />
      </a>
      <div id="right" className="relative">
        <img
          id="photo-1"
          src={require('./banner-photo-1.jpg')}
          alt="banner-1"
        />
        <img
          id="photo-2"
          src={require('./banner-photo-2.jpg')}
          alt="banner-2"
        />
        <img
          id="photo-3"
          src={require('./banner-photo-3.jpg')}
          alt="banner-3"
        />
        <img
          id="photo-4"
          src={require('./banner-photo-4.jpg')}
          alt="banner-4"
        />
      </div>
    </div>
  );
};

export default Hero;
