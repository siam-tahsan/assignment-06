import React, { use } from 'react'
import ProductCard from './ProductCard'

function Products({ productsPromise, carts, setCats }) {
    const products = use(productsPromise)
    
    
    return (
        <div>
            

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-7xl mx-auto'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} carts={carts} setCats={setCats}></ProductCard>)
                }
            </div>

        </div>
    )
}

export default Products