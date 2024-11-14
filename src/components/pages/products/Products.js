import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import './Products.css';
import ProductsAdvert from "./ProductsAdvert";

export default function Products() {
  return (
    <>
      <div className="picture_container">
        <div className="about_overlay">
          <marquee data-aos="fade-right" scrollamount={50}>Products</marquee>
        </div>
      </div>
      <div className="products_container">
        <ProductsFilter />
        <ProductsList />
        <ProductsAdvert />
      </div>
    </>
  )
}