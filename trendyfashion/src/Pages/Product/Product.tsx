import Navbar from "../../components/Navbar/Navbar";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Reserved from "../../components/Reserved/Reserved";
import TodaysDeals from "../../components/TodaysDeals/TodaysDeals";
import ProductNav from "../../components/ProductNav/ProductNav";


const Product = () => {
  return (
    <div>
        <HeaderTop/>
       <Navbar/>
       <ProductNav category1="Home" category2="Fashion" category3="Abstract Print Patchwork Dress"/>
       <div className="max-w-6xl mx-auto">
        
        <TodaysDeals/>
       </div>
        <Newsletter/>
      <Footer/>
      <Reserved/>
      
    </div>
  )
}

export default Product
