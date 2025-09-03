
import Brands from "../../components/Brands/Brands";
import Collections from "../../components/Collections/Collections";
import Deals from "../../components/Deals/Deals";
import Footer from "../../components/Footer/Footer";
import ForYou from "../../components/ForYou/ForYou";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NewArrival from "../../components/NewArirval/NewArrival";
import Newsletter from "../../components/Newsletter/Newsletter";
import Reserved from "../../components/Reserved/Reserved";
import TodaysDeals from "../../components/TodaysDeals/TodaysDeals";


const Home = () => {
  return (
    <div >
      <HeaderTop/>
       <Navbar/>
      <Hero/>
      <NewArrival/>
      <Brands/>
      <Collections/>
      <TodaysDeals/>
      <ForYou/>
      <Deals/>
      <Newsletter/>
      <Footer/>
      <Reserved/>
    </div>
  )
}

export default Home
