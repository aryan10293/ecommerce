import React from 'react'
import { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
function Checkout(props) {
  const location = useLocation();
  const numbers = location.pathname.split('/').slice(2);
  const order = numbers[0]; 
  const tracking = numbers[1]
  console.log()
    const [cart,setCart] = React.useState([...props.state.cart])
    React.useEffect(() => {
    async function fetchData(){
      try {
      const response = await fetch('http://localhost:2011/cart', {
          method: 'GET',
          credentials: 'include'
      });
      const data = await response.json();
      setCart(data)
      } catch (error) {
      console.error(error);
      }
    }
      fetchData()
  }, []);
  console.log(cart)
  return (
    <>
    <Navbar />
        <main class="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-3xl">
            <div class="max-w-xl">
            <h1 class="text-base font-medium text-indigo-600">Thank you!</h1>
            <p class="mt-2 text-4xl font-bold tracking-tight">It's on the way!</p>
            <p class="mt-2 text-base text-gray-500">Your order #{order} has shipped and will be with you soon.</p>

            <dl class="mt-12 text-sm font-medium">
                <dt class="text-gray-900">Tracking number</dt>
                <dd class="mt-2 text-indigo-600">{tracking}</dd>
            </dl>
            </div>

            <section aria-labelledby="order-heading" class="mt-10 border-t border-gray-200">
            <h2 id="order-heading" class="sr-only">Your order</h2>

            <h3 class="sr-only">Items</h3>

            {cart.map(item => {
                return (
                    <div class="flex space-x-6 border-b border-gray-200 py-10">
                        <img src={item.img} alt={item.item} class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40" />
                        <div class="flex flex-auto flex-col">
                        <div>
                            <h4 class="font-medium text-gray-900">
                                {item.item}
                            </h4>
                        </div>
                        <div class="mt-6 flex flex-1 items-end">
                            <dl class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                            <div class="flex">
                                <dt class="font-medium text-gray-900">Quantity</dt>
                                <dd class="ml-2 text-gray-700">1</dd>
                            </div>
                            <div class="flex pl-4 sm:pl-6">
                                <dt class="font-medium text-gray-900">Price</dt>
                                <dd class="ml-2 text-gray-700">{item.price}.00</dd>
                            </div>
                            </dl>
                        </div>
                        </div>
                    </div>
                )
            })}

            <div class="sm:ml-40 sm:pl-6">
                <h3 class="sr-only">Your information</h3>

                <h4 class="sr-only">Addresses</h4>
                <dl class="grid grid-cols-2 gap-x-6 py-10 text-sm">
                <div>
                    <dt class="font-medium text-gray-900">Shipping address</dt>
                    <dd class="mt-2 text-gray-700">
                    <address class="not-italic">
                        <span class="block">{props.state.userName}</span>
                        <span class="block">7363 Cynthia Pass</span>
                        <span class="block">Toronto, ON N3Y 4H8</span>
                    </address>
                    </dd>
                </div>
                <div>
                    <dt class="font-medium text-gray-900">Billing address</dt>
                    <dd class="mt-2 text-gray-700">
                    <address class="not-italic">
                        <span class="block">{props.state.userName}</span>
                        <span class="block">7363 Cynthia Pass</span>
                        <span class="block">Toronto, ON N3Y 4H8</span>
                    </address>
                    </dd>
                </div>
                </dl>

                <h4 class="sr-only">Payment</h4>
                <dl class="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
                <div>
                    <dt class="font-medium text-gray-900">Payment method</dt>
                    <dd class="mt-2 text-gray-700">
                    <p>Apple Pay</p>
                    <p>Mastercard</p>
                    <p><span aria-hidden="true">••••</span><span class="sr-only">Ending in </span>1545</p>
                    </dd>
                </div>
                <div>
                    <dt class="font-medium text-gray-900">Shipping method</dt>
                    <dd class="mt-2 text-gray-700">
                    <p>DHL</p>
                    <p>Takes up to 3 working days</p>
                    </dd>
                </div>
                </dl>

                <h3 class="sr-only">Summary</h3>

                <dl class="space-y-6 border-t border-gray-200 pt-10 text-sm">
                <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Subtotal</dt>
                    <dd class="text-gray-700">${cart.reduce((a,b) => {return Number(b.price.substring(1)) + a}, 0)}.00</dd>
                </div>
                <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Shipping</dt>
                    <dd class="text-gray-700">$30.00</dd>
                </div>
                <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Tax</dt>
                    <dd class="text-gray-900">$35.00</dd>
                </div>
                <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Total</dt>
                    <dd class="text-gray-900">${cart.reduce((a,b) => {return Number(b.price.substring(1)) + a}, 0) + 30 + 35}.00</dd>
                </div>
                </dl>
            </div>
            </section>
        </div>
        </main>
    </>
  )
}

export default Checkout
