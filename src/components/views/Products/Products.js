import './Products.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';


function Products(props) {
  const products = [
    { id: "1", pName: 'Bread', pPrice: '1.10' },
    { id: "2", pName: 'Milk', pPrice: '0.50' },
    { id: "3", pName: 'Cheese', pPrice: '0.90' },
    { id: "4", pName: 'Soup', pPrice: '0.60' },
    { id: "5", pName: 'Butter', pPrice: '1.20' }
  ]

  const [isPresent, setIsPresent] = useState(false)
  const dispatch = useDispatch()

  const addTocart = (item) => {
    setIsPresent(true)
    dispatch(addToCart({ ...item, quantity: item.quantity = 1 }))
  }
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {
        isPresent &&
        <div className="alert">
          <span className="closebtn" onClick={() => setIsPresent(false)}>&times;</span>
          <strong>Product</strong> added into cart.
        </div>
      }
      <h1 className="font-bold border-b-2 text-5xl pb-4">Products</h1>
      <div className="product-list">
        <ul className="list-inside">
          {/* <pre>{JSON.stringify(products && products.length > 0)}</pre> */}
          {
            (products && products.length > 0) &&
            products.map(item => (
              <li key={item.pName} className="flex justify-between border-b-2 items-center pt-4 pb-4">
                <div className="product-name">{item.pName}</div>
                <div className="actions flex justify-between items-center">
                  <div className="pr-10">&#163; {item.pPrice}</div>
                  <div className="">
                    <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white" onClick={() => addTocart(item)}> Add</button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  );
}

export default Products;
