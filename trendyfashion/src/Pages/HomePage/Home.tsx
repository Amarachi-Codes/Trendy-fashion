
import Brands from "../../components/Brands/Brands";
import Collections from "../../components/Collections/Collections";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NewArrival from "../../components/NewArirval/NewArrival";


const Home = () => {
  return (
    <div>
       <Navbar/>
      <Hero/>
      <NewArrival/>
      <Brands/>
      <Collections/>
    </div>
  )
}

export default Home
