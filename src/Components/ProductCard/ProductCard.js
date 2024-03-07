import './ProductCard.css';

const ProductCard = ({ title, imageUrl }) => {

  return (
    <div
      className="product-card bg-white dib br3 pa1 ma2 grow ba bw1 b--light-gray shadow-5"
    >
      <img className="product-image" src={imageUrl} alt="product" />
      <h6 className="product-title">{title}</h6>
    </div>
  );
};

export default ProductCard;
