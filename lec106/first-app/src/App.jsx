import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title= "Card 1" desc="this is the card 1" />
        <Card title= "Card 2" desc="this is the card 2" />
        <Card title= "Card 3" desc="this is the card 3" />
        <Card title= "Card 4" desc="this is the card 4" />
      </div>
      <Footer/>
    </>
  )
}

export default App
