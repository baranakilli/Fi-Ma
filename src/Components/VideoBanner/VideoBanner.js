import { Fragment } from 'react';

const VideoBanner = () => {
  return (
    <Fragment>
      <div className='banner-container'>
        <video
          className="banner-content"
          autoPlay
          muted
          loop
          poster={require('./video-banner1-poster.png')}
          src={require('./video-banner1.mp4')}
        ></video>
      </div>
      <hr/>
    </Fragment>
  );
};

export default VideoBanner;
