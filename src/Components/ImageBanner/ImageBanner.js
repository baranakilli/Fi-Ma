import { Fragment } from 'react';

const ImageBanner = ({imageUrl}) => {
  return (
    <Fragment>
      <div className="banner-container">
        <img className="banner-content" src={require(`./${imageUrl}`)} alt="banner" />
      </div>
      <hr />
    </Fragment>
  );
};

export default ImageBanner;
