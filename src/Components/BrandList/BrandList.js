import './BrandList.css';

const scrollToLeft = () => {
  const brandsContainer = document.getElementById('brands-container');
  const groupWidth = brandsContainer.offsetWidth;
  const currentScrollLeft = brandsContainer.scrollLeft;
  if (currentScrollLeft !== 0 || currentScrollLeft % groupWidth === 0) {
    brandsContainer.scrollBy({ left: -groupWidth, behavior: 'smooth' });
  }
};

const scrollToRight = () => {
  const brandsContainer = document.getElementById('brands-container');
  const groupWidth = brandsContainer.offsetWidth;
  const currentScrollLeft = brandsContainer.scrollLeft;
  const maxScrollWidth = brandsContainer.scrollWidth;
  console.log(groupWidth);
  console.log(currentScrollLeft);
  if (currentScrollLeft === 0 || currentScrollLeft % groupWidth === 0) {
    if (currentScrollLeft + groupWidth + 10 >= maxScrollWidth) {
      brandsContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      brandsContainer.scrollBy({ left: groupWidth, behavior: 'smooth' });
    }
  }
};

const BrandList = () => {
  return (
    <div id="brands-carousel">
      {/* <button id="scroll-left" onClick={scrollToLeft}>
        &#10094;
      </button> */}
      <div id="brands-container">
        <img src={require('./Quzu-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Armine-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Machinist-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Robin-Brand-Banner.jpg')} alt="brand" />
        {/* <img src={require('./Sateen-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Quzu-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Armine-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Machinist-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Robin-Brand-Banner.jpg')} alt="brand" />
        <img src={require('./Sateen-Brand-Banner.jpg')} alt="brand" /> */}
      </div>
      {/* <button id="scroll-right" onClick={scrollToRight}>
        &#10095;
      </button> */}
    </div>
  );
};

export default BrandList;
