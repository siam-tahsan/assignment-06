import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function ProductCard({product, carts, setCats}) {
    const [isAddedCart, setIsAddedCart] = useState(false)
    
    const haddleBuyNow = () => {
        setIsAddedCart(true)
        setCats([...carts,product])
        toast.success('Item added to Cart!')
    }


    return (
        <div className="border border-gray-200 rounded-2xl p-6 shadow-sm transition" key={product.id}>
            <div>
                <div className='flex justify-end'>
                    <span className={`badge badge-outline ${product.tagType === "popular" ? "badge-primary" : product.tagType === "new" ? "badge-success" : "badge-warning"}`}>{product.tag}</span>
                </div>
                <img className='h-9 w-9' src={product.icon} alt="" />

            </div>

            <div>
                <h1 className='text-2xl font-bold pt-4'>{product.name}</h1>
                <p className='text-[#627382] text-xl py-5'>{product.description}</p>
            </div>

            <div className="py-4">
                <h2 className="text-3xl font-bold">
                    ${product.price}
                    <span className="text-base font-normal text-gray-500">
                        / {product.period}
                    </span>
                </h2>
            </div>

            <div className='space-y-2'>
                {product.features.map(feature =>
                    <p key={feature.id}>✔{feature}</p>
                )}

                <button onClick={haddleBuyNow} className="btn btn-primary w-full rounded-full">{isAddedCart ? 'Added to Cart' : 'Buy Now'}</button>
            </div>


        </div>
    )
}
