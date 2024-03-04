import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const lowerCaseBrand = product.brand.toLowerCase();
        const transformedTitle = product.title.replace(/\s+/g, '-').toLowerCase() + '-p-';
        return (
          <a
            className="product-link"
            rel="noreferrer noopener"
            target="_blank"
            href={`https://www.trendyol.com/${lowerCaseBrand}/${transformedTitle}${product.productContentId}?boutiqueId=61&merchantId=645403&filterOverPriceListings=false&sav=true`}
          >
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0].url}
            />
          </a>
        );
      })}
    </div>
  );
};

export default ProductList;
