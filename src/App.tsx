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
import { add, list, remove, updateNew } from './api/products'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])

  const removeItem = (id: number) =>{
    remove(id)
    setProducts(products.filter(item => item.id !== id))
  }

  
  const onHandlerAdd = (data: ProductType)=>{
    add(data)
    setProducts([...products, data])
  }

  const onHandleUpdate = async (product: ProductType)=>{
    const {data} = await updateNew(product)
    setProducts(products.map(item => item.id === data.id ? data : item))
  }
  
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={ <WebsiteLayout/>}>
            <Route index element= {<HomePage/>}/>
            <Route path="product">
                <Route index element={<ProductPage product={products}/>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
          </Route>
          <Route path='admin' element= { <PrivateRouter><AdminLayout/></PrivateRouter> }>
            <Route index element= {<Navigate to="dashboard"/>}/>
            <Route path='dashboard' element={ <h1>DashBoard</h1> } />
            <Route path='product'>
              <Route index element={<ProductManager product={products} onRemote={removeItem}  />} />
              <Route path='add' element={<ProductAdd onAdd={onHandlerAdd}/>}/>
              <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
            </Route>
            
          </Route>
          <Route path='login' element= {<h1>Login Page</h1>}/>
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