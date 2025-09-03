
import Brands from "../../components/Brands/Brands";
import Collections from "../../components/Collections/Collections";
import ForYou from "../../components/ForYou/ForYou";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NewArrival from "../../components/NewArirval/NewArrival";


const Home = () => {
  return (
    <div >
      <HeaderTop/>
       <Navbar/>
      <Hero/>
      <NewArrival/>
      <Brands/>
      <Collections/>
      <ForYou/>
    </div>
  )
}

export default Home
