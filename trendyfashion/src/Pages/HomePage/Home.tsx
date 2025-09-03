
import Brands from "../../components/Brands/Brands";
import Collections from "../../components/Collections/Collections";
import Deals from "../../components/Deals/Deals";
import ForYou from "../../components/ForYou/ForYou";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NewArrival from "../../components/NewArirval/NewArrival";
import Newsletter from "../../components/Newsletter/Newsletter";
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
    </div>
  )
}

export default Home
