
import Hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  return (
    <div>
       <Navbar/>
      <img src={Hero} alt=""  />
    </div>
  )
}

export default Home
