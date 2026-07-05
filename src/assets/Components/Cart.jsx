import React from 'react'
import { toast } from 'react-toastify'

function Cart({ carts, setCats }) {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCats([])
        toast.success('Payment Successfull!')
    }

    const handleDelete = (item) =>{
        const filteredArray = carts.filter(c=> c.id !== item.id)
        setCats(filteredArray)
        toast.success('Item Deleted!')
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-3xl font-bold py-8'>Your Cart</h2>
            
            {
                carts.length=== 0 ? <p className='text-2xl text-center p-3 mb-5 text-gray-500'> Cart is Empty</p> : 
                <>
                <div className='space-y-2'>
                {
                    carts.map(item => <div key={item.id} className='bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-5 '>
                        <div className='flex justify-between'>
                            <div className="flex items-center gap-4">
                                <img className="w-10 h-10" src={item.icon} alt={item.name} />

                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                            </div>

                            <div>
                                <button onClick={()=> handleDelete(item)} className='btn btn-outline text-red-700 border-none'>Remove</button>
                            </div>
                        </div>

                    </div>)

                }

                <div className='flex justify-between p-5'>
                    <h3 className='font-bold'>Total:</h3>
                    <p className='font-bold text-2xl'>${totalPrice}</p>
                </div>

                <button onClick={handlePayment} className='btn btn-primary w-full rounded-full my-3'>Proceed to Checkout</button>
            </div>
                </>
            }
        </div>
    )
}

export default Cart