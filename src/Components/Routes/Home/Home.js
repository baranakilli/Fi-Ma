import Hero from '../../Hero/Hero';
import ListHeader from '../../ListHeader/ListHeader';
import ProductList from '../../ProductList/ProductList';
import VideoBanner from '../../VideoBanner/VideoBanner';
import ImageBanner from '../../ImageBanner/ImageBanner';
import BrandList from '../../BrandList/BrandList';
import './Home.css';

const Home = ({tenNewProducts, tenTrendProducts}) => {
  return (
    <div>
      <Hero />
      <section id="new-products">
        <ListHeader listTitle={'En Yeniler'} />
        <ProductList products={tenNewProducts} />
      </section>
      <VideoBanner/>
      <ListHeader listTitle={'Çok Satanlar'} />
      <ProductList products={tenTrendProducts} />
      <ImageBanner imageUrl={'image-banner1.jpg'}/>
      <BrandList/>
    </div>
  );
};

export default Home;
