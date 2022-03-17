import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import {Routes, Route, NavLink} from 'react-router-dom'
import HomePage from './pages/homePage'
import ProductPage from './pages/productPage'
import AboutPage from './pages/aboutPage'
import Header from './components/Header'

function App() {
  return (
    <div>
     <Header/>
      <main>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='product' element={ <ProductPage/> }/>
          <Route path='about' element={ <AboutPage/> }/>
        </Routes>
      </main>
    </div>
  )
}

export default App


// const removeItem = (id: number) => {
//   const newsProduct = products.filter(item => item.id !== id);
//   setProducts(newsProduct)
// }
// const [count, setCount] = useState(2)
  // const [myName, setMyName] = useState("Tuan")
  // const [info, setInfo] = useState({ name: "Dat", age: 20});
  // const [products, setProducts] = useState([
  //   {id: 1, name: "Product A"},
  //   {id: 2, name: "Product B"},
  //   {id: 3, name: "Product C"}
  // ])
  // <div className="App">
       
    // Count: {count}<button onClick={() => setCount(count + 1)}>Click</button>
    // <hr />
    // My Name : {myName}<button onClick={() => setMyName("Le Tung Lam")}>Change Name</button>
    // <hr />
    // Info: {info.name} - {info.age}
    //   <hr />
    //   Products: { products.map(item => <div>{item.name}<button onClick={() => removeItem(item.id)}>Remove</button> </div>)}  
    //   <hr />
    //   <ShowInfo name="Dat" age={20}/>
    // </div>