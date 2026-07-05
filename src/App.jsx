
import { useState } from 'react'
import './App.css'
import Activity from './assets/Components/Activity'
import Cart from './assets/Components/Cart'
import Hero from './assets/Components/Hero'
import Navbar from './assets/Components/Navbar'
import Products from './assets/Components/Products'
import Steps from './assets/Components/Steps'
import Transparent from './assets/Components/Transparent'

const getProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}

const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState('products')
  const [carts, setCats] = useState([])
  

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Hero></Hero>
      <Activity></Activity>

      <div className="tabs tabs-box justify-center">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Products" onClick={()=>setActiveTab('products')}defaultChecked/>
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart(${carts.length})`} onClick={()=>setActiveTab('cart')}/>
      </div>
      
      {activeTab === 'products' && <Products productsPromise={productsPromise}carts={carts} setCats={setCats}></Products>}
      {activeTab === 'cart' && <Cart carts={carts} setCats={setCats}></Cart>}

      <Steps></Steps>
      <Transparent></Transparent>
    </>
  )
}

export default App
