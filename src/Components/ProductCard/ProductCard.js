import './ProductCard.css';

const ProductCard = ({ title, imageUrl }) => {

  return (
    <div
      className="product-card"
    >
      <img className="product-image" src={imageUrl} alt="product" />
      <h6 className="product-title">{title}</h6>
    </div>
  );
};

export default ProductCard;
