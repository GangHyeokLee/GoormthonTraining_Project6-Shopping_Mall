import React from 'react'
import Banner from "./Banner"
import Items from "./items"
import Nav from "./nav"

function ProductsPage() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Items/>

    </div>
  )
}

export default ProductsPage