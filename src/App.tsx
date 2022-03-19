import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import HomePage from './pages/homePage'
import ProductPage from './pages/productPage'
import AboutPage from './pages/aboutPage'
import Header from './components/Header'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { ProductType } from './types/product'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './pages/ProductManager'
import { list } from './api/products'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])
  return (
    <div>
      <div>
        {products.map(item => item.name)}
      </div>
      <main>
        <Routes>
          <Route path='/' element={ <WebsiteLayout/>}>
            <Route index element= {<HomePage/>}/>
            <Route path="product">
                <Route index element={<ProductPage/>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
          </Route>
          <Route path='admin' element={ <AdminLayout/>}>
            <Route index element= {<Navigate to="dashboard"/>}/>
            <Route path='dashboard' element={ <h1>DashBoard</h1> } />
            <Route path="products" element={<ProductManager product={products}/>} />
          </Route>
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