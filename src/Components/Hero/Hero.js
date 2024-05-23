/* eslint-disable jsx-a11y/anchor-has-content */
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero">
      <img
        id="banner-left"
        src={require('./images/banner-photo-left.jpg')}
        alt="banner-left"
      />
      <div
        id="logo-container"
        href="https://www.trendyol.com/magaza/fi-ma-m-645403?sst=0"
      >
        <img
          id="fi-ma-logo"
          src={require('./images/fi-ma.png')}
          alt="fi-ma-logo"
          draggable="false"
        />
        <h1 id="fi-ma-title">Fi-MA</h1>
        <em>
          <h4 id="fi-ma-slogan">"Şıklığına Değer Kat"</h4>
        </em>
      </div>
      <img
        id="banner-right"
        src={require('./images/banner-photo-right.jpg')}
        alt="banner-right"
      />
      <div id="scroll-more-arrows">
        <svg
          id="scroll-more-arrow1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        <svg
          id="scroll-more-arrow2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
