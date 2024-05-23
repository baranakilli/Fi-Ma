import ListHeader from "../../ListHeader/ListHeader";
import ProductList from "../../ProductList/ProductList";

const AllProducts = ({filteredProducts}) => {
  return (
    <section style={{marginTop: '70px'}}>
      <ListHeader listTitle={'Tüm Ürünler'}/>
      <ProductList products={filteredProducts}/>
    </section>
  )
}

export default AllProducts;