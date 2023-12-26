import Navber from "./components/layout/Navber"
import Search from "./components/layout/Search"
import Product2 from "./components/layout/product2"
import Vasket from './assets/vasket.png'
import Sunglass from './assets/sunglass.png'
import Headphone from './assets/headphone.png'
import Table from './assets/table.png'
import Footer from "./components/layout/Footer"
import Cart from "./components/layout/Cart"
import SignUp from "./components/layout/SignUp"


function App() {
  
  return (
    <>
    <Navber/>
    <Search/>
    <Product2 Vasket={Vasket} Sunglass={Sunglass} Headphone={Headphone} Table={Table}/>
    <Cart/>
    <SignUp/>
    <Footer/>
    </>
  )
}

export default App
